import { Parser } from "cxml";
import * as getHotelList from "../xmlns/getHotelList";
import fetch from "node-fetch";

const parser = new Parser();

fetch("https://www.easymailing.eu/mss/mss_service.php", {
  method: "POST",
  headers: { "Content-Type": "text/xml" },
  body: `<?xml version="1.0"?>
  <root>
    <version>1.0</version>
    <header>
      <credentials>
        <user>${process.env.MSS_USER}</user>
        <password>${process.env.MSS_PASSWORD}</password>
        <source>${process.env.MSS_SOURCE}</source>
      </credentials>
      <method>getHotelList</method>
      <paging>
        <start>0</start>
        <limit>10</limit>
      </paging>
    </header>
    <request>
      <search>
        <lang>de</lang>
      </search>
    </request>
  </root>`
})
  .then<getHotelList.document>(res =>
    parser.parse(res.body, getHotelList.document)
  )
  .then(body => console.log(body.root.result.hotel[0]));
