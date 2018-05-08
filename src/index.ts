import * as getHotelList from "../xmlns/getHotelList";
import mss from "./client";
import { HotelDetails, MssRequest, DeepPartial } from "./types";

const request: DeepPartial<MssRequest> = {
  header: {
    method: "getHotelList",
    paging: {
      start: 0,
      limit: 10
    }
  },
  request: {
    options: {
      hotel_details: HotelDetails.BasicInfo
    }
  }
};

mss<getHotelList.document>(request).then(res => {
  console.log(res.root.result.hotel);
});
