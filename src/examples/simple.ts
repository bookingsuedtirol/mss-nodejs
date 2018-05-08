import mss, { Request, Response } from "../index";

const request: Request.Root = {
  header: {
    method: "getHotelList",
    paging: {
      start: 0,
      limit: 10
    }
  },
  request: {
    options: {
      hotel_details: Request.HotelDetails.BasicInfo
    }
  }
};

mss<Response.GetHotelList.document>(request).then(res => {
  console.log(res.root.result.hotel);
});
