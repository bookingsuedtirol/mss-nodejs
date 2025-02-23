import Boolean from "../types/Boolean.js";
import Date from "../types/Date.js";

import Address from "./Address.js";
import Company from "./Company.js";
import Credentials from "./Credentials.js";
import Data from "./Data.js";
import Details from "./Details.js";
import ExtraPrice from "./ExtraPrice.js";
import Form from "./Form.js";
import Guest from "./Guest.js";
import Header from "./Header.js";
import Logging from "./Logging.js";
import Options from "./Options.js";
import Order from "./Order.js";
import Paging from "./Paging.js";
import Payment from "./Payment.js";
import Request from "./Request.js";
import Room from "./Room.js";
import Root from "./Root.js";
import Search from "./Search.js";
import SearchAvailability from "./SearchAvailability.js";
import SearchDistance from "./SearchDistance.js";
import SearchHotel from "./SearchHotel.js";
import SearchLocation from "./SearchLocation.js";
import SearchLTS from "./SearchLts.js";
import SearchOffer from "./SearchOffer.js";
import SearchPriceList from "./SearchPriceList.js";
import SearchSpecial from "./SearchSpecial.js";
import Stars from "./Stars.js";
import Tracking from "./Tracking.js";
import Validity from "./Validity.js";

export default {
  name: "MSS",
  typeInfos: [
    new Date(),
    new Boolean(),
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
    SearchLTS,
    SearchOffer,
    SearchPriceList,
    SearchSpecial,
    Stars,
    Tracking,
    Validity,
  ],
  elementInfos: [
    {
      elementName: "root",
      typeInfo: "MSS.Root",
    },
  ],
};
