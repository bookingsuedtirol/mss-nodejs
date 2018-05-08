import { Client, Request } from "../index";

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
