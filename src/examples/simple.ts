import { Client, Request } from "../index";
import dotenv from "dotenv";
dotenv.config();

const client = new Client();

const { HotelDetails: HD } = Request;

client
  .request((req) => {
    req.header.paging = {
      start: 0,
      limit: 2,
    };
    req.request.search.id = [9002];
    req.request.options = {
      hotel_details: HD.BasicInfo | HD.FullDescription,
    };

    return req;
  })
  .then((res) => {
    console.log(res.result.hotel[0]);
  });
