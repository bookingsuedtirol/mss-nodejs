# mss-nodejs

[![npm version](https://img.shields.io/npm/v/@hgv/mss-nodejs.svg?style=flat)](https://www.npmjs.com/package/@hgv/mss-nodejs)

Experimential MSS API wrapper for Node.js projects.

> Warning! Do not use this in production yet!
> Supports only v2.0!

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

## Example

```js
const { Client, Request } = require("@hgv/mss-nodejs");

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
