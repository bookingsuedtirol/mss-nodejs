import dotenv from "dotenv";
import { Client, Request } from "../index.js";
dotenv.config();

const client = new Client();

const { HotelDetails: HD } = Request;

const main = async () => {
  try {
    const res = await client.request((req) => {
      req.header.paging = {
        start: 0,
        limit: 2,
      };
      req.request.search.id = [9002];
      req.request.options = {
        hotel_details: HD.BasicInfo | HD.FullDescription,
      };

      return req;
    });

    console.log(res.result.hotel[0]);
  } catch (err) {
    console.error(err);
  }
};

main();
