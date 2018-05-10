import { Request, Response } from "./index";
import fetch from "node-fetch";
import { Parser } from "cxml";
import * as xmlbuilder from "xmlbuilder";
import * as clone from "clone";

export interface ClientSettings {
  user: string;
  password: string;
  source: string;
}

export class Client {
  private parser: Parser;
  private defaultPayload: Request.Root;

  constructor(
    settings: ClientSettings = {
      user: process.env.MSS_USER as string,
      password: process.env.MSS_PASSWORD as string,
      source: process.env.MSS_SOURCE as string
    }
  ) {
    this.parser = new Parser();
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
      .then(
        res =>
          (this.parser.parse(res.body, Response.document) as any) as Promise<
            Response.document
          >
      )
      .then(res => res.root);
  };
}
