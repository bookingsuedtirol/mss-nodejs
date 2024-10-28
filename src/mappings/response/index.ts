import Date from "../types/Date.js";
import NlToBr from "../types/NlToBr.js";
import PictureURL from "../types/PictureUrl.js";

import Address from "./Address.js";
import Bank from "./Bank.js";
import CancelPolicy from "./CancelPolicy.js";
import Channel from "./Channel.js";
import CheckInOut from "./CheckInOut.js";
import Contact from "./Contact.js";
import Day from "./Day.js";
import Error from "./Error.js";
import Feature from "./Feature.js";
import Geolocation from "./Geolocation.js";
import Header from "./Header.js";
import Hotel from "./Hotel.js";
import HotelPayment from "./HotelPayment.js";
import Location from "./Location.js";
import LocationName from "./LocationName.js";
import LtsData from "./LtsData.js";
import Matching from "./Matching.js";
import Occupancy from "./Occupancy.js";
import Offer from "./Offer.js";
import Paging from "./Paging.js";
import PaymentTerm from "./PaymentTerm.js";
import Penalty from "./Penalty.js";
import Picture from "./Picture.js";
import PictureGroup from "./PictureGroup.js";
import Price from "./Price.js";
import PriceList from "./PriceList.js";
import Properties from "./Properties.js";
import Rating from "./Rating.js";
import Restriction from "./Restriction.js";
import Result from "./Result.js";
import Room from "./Room.js";
import RoomDetail from "./RoomDetail.js";
import RoomPrice from "./RoomPrice.js";
import Root from "./Root.js";
import Season from "./Season.js";
import Special from "./Special.js";
import Theme from "./Theme.js";

export default {
  name: "Mss",
  typeInfos: [
    new NlToBr(),
    new Date(),
    new PictureURL(),
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
