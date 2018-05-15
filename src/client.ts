import { Request, Response } from "./index";
import fetch from "node-fetch";
import * as xmlbuilder from "xmlbuilder";
import * as clone from "clone";
import mappings from "./mappings";
const omitDeep = require("omit-deep");
const { Jsonix } = require("jsonix");

const context = new Jsonix.Context([mappings]);
const unmarshaller = context.createUnmarshaller();

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
      source: process.env.MSS_SOURCE as string
    }
  ) {
    this.defaultPayload = {
      version: "1.0",
      header: {
        credentials: settings,
        method: "getHotelList"
      },
      request: {
        search: {
          lang: "de"
        }
      }
    };
  }

  request = async (callback: (payload: Request.Root) => Request.Root) => {
    const newRequest = callback(clone(this.defaultPayload));

    const body = xmlbuilder.create({
      root: newRequest
    });

    return fetch("https://www.easymailing.eu/mss/mss_service.php", {
      method: "POST",
      headers: { "Content-Type": "text/xml" },
      body: body.toString()
    })
      .then(res => res.text())
      .then(body => {
        const data = unmarshaller.unmarshalString(body).value;
        omitDeep(data, "TYPE_NAME");
        return data as Response.Root;
      });
    // .then(res => res.root);
  };
}
