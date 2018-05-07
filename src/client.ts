import { MssRequest, DeepPartial } from "./types";
import fetch from "node-fetch";
import { Parser } from "cxml";
import * as xmlbuilder from "xmlbuilder";
import * as deepExtend from "deep-extend";

const parser = new Parser();
const defaultRequest: MssRequest = {
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

const client = async <T>(request: DeepPartial<MssRequest>) => {
  const newRequest = {
    root: {
      ...deepExtend(defaultRequest, request)
    }
  };

  const body = xmlbuilder.create(newRequest);
  const { method } = newRequest.root.header;

  const xmlns = await import(`../xmlns/${method}`);

  return fetch("https://www.easymailing.eu/mss/mss_service.php", {
    method: "POST",
    headers: { "Content-Type": "text/xml" },
    body: body.toString()
  }).then<T>(res => parser.parse(res.body, xmlns.document));
};

export default client;
