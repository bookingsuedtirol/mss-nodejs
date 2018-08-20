import Date from "../types/Date";

import Address from "./Address";
import Company from "./Company";
import Credentials from "./Credentials";
import Data from "./Data";
import Details from "./Details";
import ExtraPrice from "./ExtraPrice";
import Form from "./Form";
import Guest from "./Guest";
import Header from "./Header";
import Logging from "./Logging";
import Options from "./Options";
import Order from "./Order";
import Paging from "./Paging";
import Payment from "./Payment";
import Request from "./Request";
import Room from "./Room";
import Root from "./Root";
import Search from "./Search";
import SearchAvailability from "./SearchAvailability";
import SearchDistance from "./SearchDistance";
import SearchHotel from "./SearchHotel";
import SearchLocation from "./SearchLocation";
import SearchLts from "./SearchLts";
import SearchOffer from "./SearchOffer";
import SearchPriceList from "./SearchPriceList";
import SearchSpecial from "./SearchSpecial";
import Stars from "./Stars";
import Tracking from "./Tracking";
import Validitiy from "./Validitiy";

export default {
  name: "Mss",
  typeInfos: [
    new Date(),
    Address,
    Company,
    Credentials,
    Data,
    Details,
    ExtraPrice,
    Form,
    Guest,
    Header,
    Logging,
    Options,
    Order,
    Paging,
    Payment,
    Request,
    Room,
    Root,
    Search,
    SearchAvailability,
    SearchDistance,
    SearchHotel,
    SearchLocation,
    SearchLts,
    SearchOffer,
    SearchPriceList,
    SearchSpecial,
    Stars,
    Tracking,
    Validitiy
  ],
  elementInfos: [
    {
      elementName: "root",
      typeInfo: "Mss.Root"
    }
  ]
};
