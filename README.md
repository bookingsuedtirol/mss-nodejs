# mss-nodejs

[![npm version](https://img.shields.io/npm/v/@bookingsuedtirol/mss-nodejs.svg?style=flat)](https://www.npmjs.com/package/@bookingsuedtirol/mss-nodejs)

MSS API v2.0 wrapper for Node.js projects.

## Available services

- [x] getHotelList
- [x] getSpecialList
- [x] getRoomList
- [x] getPriceList
- [x] getRoomAvailability
- [x] getHotelPictures
- [x] getHotelPictureGroups
- [ ] prepareBooking
- [ ] getBooking
- [ ] createInquiry
- [ ] getUserSources

## Runnable example

`npm run dev`

## Example

```js
import { Client, Request } from "@bookingsuedtirol/mss-nodejs";

const client = new Client({
  user: "username",
  password: "password",
  source: "source",
});

const res = await client.request((req) => {
  req.header.method = "getHotelList";
  req.request.search.id = ["11230"];
  req.request.options = {
    hotel_details:
      Request.HotelDetails.BasicInfo |
      Request.HotelDetails.PaymentOptionsForOnlineBooking,
  };
  return req;
});

const hotel = res.result.hotel[0];
console.log(hotel.name); // => "Hotel Lichtenstern"
console.log(hotel.stars); // => 3
```

## Error handling

If MSS returns an error response or the request times out, the Promise is rejected:

```js
try {
  const res = await client.request((req) => {
    // …
  });
  // do something with res
} catch (err) {
  console.error(err);
}
```
