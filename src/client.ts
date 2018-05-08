import * as Request from "./types/request";
import fetch from "node-fetch";
import { Parser } from "cxml";
import * as xmlbuilder from "xmlbuilder";
import * as deepExtend from "deep-extend";

const parser = new Parser();
const defaultRequest: Request.Root = {
  version: "1.0",
  header: {
    credentials: {
      user: process.env.MSS_USER as string,
      password: process.env.MSS_PASSWORD as string,
      source: process.env.MSS_SOURCE as string
    },
    method: "getHotelList"
  },
  request: {
    search: {
      lang: "de"
    }
  }
};

export const client = async <T>(request: Request.Root) => {
  const newRequest = {
    root: {
      ...deepExtend(defaultRequest, request)
    }
  };

  const body = xmlbuilder.create(newRequest);
  const method = newRequest!.root!.header!.method;

  const response = await import(`./types/response/${method}`);

  return fetch("https://www.easymailing.eu/mss/mss_service.php", {
    method: "POST",
    headers: { "Content-Type": "text/xml" },
    body: body.toString()
  }).then<T>(res => parser.parse(res.body, response.document));
};
