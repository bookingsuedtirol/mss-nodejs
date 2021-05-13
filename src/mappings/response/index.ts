import NlToBr from "../types/NlToBr";
import Date from "../types/Date";

import Root from "./Root";
import Header from "./Header";
import Error from "./Error";
import Paging from "./Paging";
import Result from "./Result";
import Hotel from "./Hotel";
import Address from "./Address";
import Location from "./Location";
import LocationName from "./LocationName";
import Geolocation from "./Geolocation";
import Contact from "./Contact";
import HotelPayment from "./HotelPayment";
import CancelPolicy from "./CancelPolicy";
import Penalty from "./Penalty";
import PaymentTerm from "./PaymentTerm";
import Bank from "./Bank";
import Matching from "./Matching";
import Picture from "./Picture";
import PictureGroup from "./PictureGroup";
import Feature from "./Feature";
import LtsData from "./LtsData";
import CheckInOut from "./CheckInOut";
import Rating from "./Rating";
import Channel from "./Channel";
import Offer from "./Offer";
import Theme from "./Theme";
import Price from "./Price";
import RoomPrice from "./RoomPrice";
import Room from "./Room";
import Properties from "./Properties";
import Occupancy from "./Occupancy";
import RoomDetail from "./RoomDetail";
import Restriction from "./Restriction";
import Day from "./Day";
import PriceList from "./PriceList";
import Season from "./Season";
import Special from "./Special";

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
