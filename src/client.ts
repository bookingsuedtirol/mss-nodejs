import clone from "clone";
import jsonix from "jsonix";
import wretch from "wretch";
import AbortAddon from "wretch/addons/abort";
import { Request, Response } from "./index.js";
import requestMappings from "./mappings/request/index.js";
import responseMappings from "./mappings/response/index.js";
const { Jsonix } = jsonix;

const api = wretch("https://easychannel.it/mss/mss_service.php")
  .addon(AbortAddon())
  .headers({ "Content-Type": "text/xml" });

/**
 * @throws {MSSError}
 */
const makeMSSRequest = async (
  body: string,
): Promise<{ body: string; httpStatusCode: number }> => {
  try {
    const response = await api
      .headers({ "Content-Length": String(Buffer.byteLength(body)) })
      .post(body)
      .setTimeout(20_000)
      .res();

    return {
      body: await response.text(),
      httpStatusCode: response.status,
    };
  } catch (error) {
    if (error instanceof wretch.WretchError) {
      throw new MSSError({
        httpStatusCode: error.status,
        message: "request failed",
        code: undefined,
      });
    }

    if (error instanceof DOMException && error.name === "AbortError") {
      throw new MSSError({
        httpStatusCode: undefined,
        message: "request timed out",
        code: undefined,
      });
    }

    throw error;
  }
};

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
    },
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

  /**
   * @throws {MSSError}
   */
  request = async (callback: (payload: Request.Root) => Request.Root) => {
    const newRequest = callback(clone(this.defaultPayload));

    const requestBody = marshaller.marshalString({ root: newRequest });
    const { body, httpStatusCode } = await makeMSSRequest(requestBody);
    const data: Response.Root = unmarshaller.unmarshalString(body).value;
    modifyOutput(data);

    const { error } = data.header;
    if (error.code > 0) {
      throw new MSSError({
        httpStatusCode,
        message: error.message,
        code: error.code,
      });
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

export class MSSError extends Error {
  readonly code: number | undefined;
  readonly httpStatusCode: number | undefined;

  constructor({
    message,
    code,
    httpStatusCode,
  }: {
    message: string;
    code: number | undefined;
    httpStatusCode: number | undefined;
  }) {
    super(message);
    this.name = "MSSError";
    this.code = code;
    this.httpStatusCode = httpStatusCode;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
