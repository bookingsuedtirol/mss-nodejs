import NlToBr from "../types/NlToBr.js";
import Date from "../types/Date.js";

import Root from "./Root.js";
import Header from "./Header.js";
import Error from "./Error.js";
import Paging from "./Paging.js";
import Result from "./Result.js";
import Hotel from "./Hotel.js";
import Address from "./Address.js";
import Location from "./Location.js";
import LocationName from "./LocationName.js";
import Geolocation from "./Geolocation.js";
import Contact from "./Contact.js";
import HotelPayment from "./HotelPayment.js";
import CancelPolicy from "./CancelPolicy.js";
import Penalty from "./Penalty.js";
import PaymentTerm from "./PaymentTerm.js";
import Bank from "./Bank.js";
import Matching from "./Matching.js";
import Picture from "./Picture.js";
import PictureGroup from "./PictureGroup.js";
import Feature from "./Feature.js";
import LtsData from "./LtsData.js";
import CheckInOut from "./CheckInOut.js";
import Rating from "./Rating.js";
import Channel from "./Channel.js";
import Offer from "./Offer.js";
import Theme from "./Theme.js";
import Price from "./Price.js";
import RoomPrice from "./RoomPrice.js";
import Room from "./Room.js";
import Properties from "./Properties.js";
import Occupancy from "./Occupancy.js";
import RoomDetail from "./RoomDetail.js";
import Restriction from "./Restriction.js";
import Day from "./Day.js";
import PriceList from "./PriceList.js";
import Season from "./Season.js";
import Special from "./Special.js";

export default {
  name: "Mss",
  typeInfos: [
    new NlToBr(),
    new Date(),
    Root,
    Header,
    Error,
    Paging,
    Result,
    Hotel,
    Address,
    Location,
    LocationName,
    Geolocation,
    Contact,
    HotelPayment,
    CancelPolicy,
    Penalty,
    PaymentTerm,
    Bank,
    Matching,
    Picture,
    PictureGroup,
    Feature,
    LtsData,
    CheckInOut,
    Rating,
    Channel,
    Offer,
    Theme,
    RoomPrice,
    Price,
    Room,
    Properties,
    Occupancy,
    RoomDetail,
    Day,
    Restriction,
    PriceList,
    Season,
    Special,
  ],
  elementInfos: [
    {
      elementName: "root",
      typeInfo: "Mss.Root",
    },
  ],
};
