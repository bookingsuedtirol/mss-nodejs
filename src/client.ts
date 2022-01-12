import { Request, Response } from "./index";
import https from "https";
import clone from "clone";
import requestMappings from "./mappings/request";
import responseMappings from "./mappings/response";
import { Jsonix } from "jsonix";

const makeMssRequest = (body: string): Promise<string> =>
  new Promise((resolve, reject) => {
    let data = "";

    const req = https.request(
      "https://easychannel.it/mss/mss_service.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/xml",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        const isErrorRes = Boolean(res.statusCode && res.statusCode >= 400);
        if (isErrorRes) {
          res.destroy();
          reject(
            Error(`Request to MSS failed with status code ${res.statusCode}`)
          );
        }

        res.setEncoding("utf8");
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
        res.on("error", reject);
      }
    );

    // Set a request timeout of 20 seconds.
    req.setTimeout(20e3, () => {
      req.end();
      reject(Error("Request to MSS request timed out"));
    });

    req.write(body);
    req.end();
  });

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
      user: process.env["MSS_USER"] as string,
      password: process.env["MSS_PASSWORD"] as string,
      source: process.env["MSS_SOURCE"] as string,
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

    const requestBody = marshaller.marshalString({ root: newRequest });
    const responseBody = await makeMssRequest(requestBody);
    const data: Response.Root =
      unmarshaller.unmarshalString(responseBody).value;
    modifyOutput(data);

    const { error } = data.header;
    if (error.code > 0) {
      throw Error(
        `MSS returned an error: code ${error.code}, message: "${error.message}"`
      );
    }

    return data;
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
