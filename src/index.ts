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
      hotel_details:
        HotelDetails.BasicInfo |
        HotelDetails.Address |
        HotelDetails.Contacts |
        HotelDetails.Coordinates |
        HotelDetails.DetailedHotelFacilities |
        HotelDetails.FullDescription |
        HotelDetails.Gallery |
        HotelDetails.GeographicalInformationAsText |
        HotelDetails.GeographicInformation |
        HotelDetails.HeaderImages |
        HotelDetails.HotelFacilities |
        HotelDetails.HotelMatching |
        HotelDetails.HotelNavigatorData |
        HotelDetails.Logo |
        HotelDetails.LtsSpecificParameters |
        HotelDetails.PaymentOptionsAtHotel |
        HotelDetails.PaymentOptionsForOnlineBooking |
        HotelDetails.SalesPoint |
        HotelDetails.ShortDescription |
        HotelDetails.Themes
    }
  }
};

mss<getHotelList.document>(request).then(res => {
  res.root.result.hotel.forEach(hotel => console.log(hotel.pictures));
});
