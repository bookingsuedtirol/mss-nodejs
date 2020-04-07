import { Request, Response } from "./index";
import fetch from "node-fetch";
import * as clone from "clone";
import requestMappings from "./mappings/request";
import responseMappings from "./mappings/response";
const { Jsonix } = require("jsonix");

const marshaller = new Jsonix.Context([requestMappings]).createMarshaller();
const unmarshaller = new Jsonix.Context([
  responseMappings,
]).createUnmarshaller();

export interface ClientSettings {
  user: string;
  password: string;
  source: string;
}

export class Client {
  private defaultPayload: Request.Root;

  constructor(
    settings: ClientSettings = {
      user: process.env.MSS_USER as string,
      password: process.env.MSS_PASSWORD as string,
      source: process.env.MSS_SOURCE as string,
    }
  ) {
    this.defaultPayload = {
      version: "2.0",
      header: {
        credentials: settings,
        method: "getHotelList",
      },
      request: {
        search: {
          lang: "de",
        },
      },
    };
  }

  request = async (callback: (payload: Request.Root) => Request.Root) => {
    const newRequest = callback(clone(this.defaultPayload));

    const body = marshaller.marshalString({ root: newRequest });

    return fetch("https://www.bookingsuedtirol.com/mss/mss_service.php", {
      method: "POST",
      headers: { "Content-Type": "text/xml" },
      body,
    })
      .then((res) => res.text())
      .then((body) => {
        const data = unmarshaller.unmarshalString(body).value;
        modifyOutput(data);
        return data as Response.Root;
      });
  };
}

const modifyOutput = (object: any): void => {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      // Remove TYPE_NAME property
      if (key === "TYPE_NAME") {
        delete object[key];
      }

      // Convert empty strings to null (happens with empty tags <example />)
      if (object[key] === "") {
        object[key] = null;
      }

      if (typeof object[key] === "object") {
        modifyOutput(object[key]);
      }
    }
  }
};
