import { Client, Request } from "../index";
import * as dotenv from "dotenv";
dotenv.config();

const client = new Client();

client
  .request(req => {
    req.header.paging = {
      start: 0,
      limit: 10
    };
    req.request.options = {
      hotel_details: Request.HotelDetails.BasicInfo
    };

    return req;
  })
  .then(res => {
    console.log(res.result.hotel);
  });
