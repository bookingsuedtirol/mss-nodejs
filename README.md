# mss-nodejs

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
  source: "source"
});

client
  .request(req => {
    req.header.method = "getHotelList";
    req.request.search.id = ["11230"];
    req.request.options = {
      hotel_details:
        Request.HotelDetails.BasicInfo |
        Request.HotelDetails.PaymentOptionsForOnlineBooking
    };
    return req;
  })
  .then(res => {
    const hotel = res.result.hotel[0];
    console.log(hotel.name); // => string(18) "Hotel Lichtenstern"
    console.log(hotel.stars); // => float(3)
  });
```

## Exception handling

If the MSS returns an error response, an exception is thrown.

```js
client
  .request(req => { ... })
  .then(res => { ... })
  .catch(e => {
    console.log(e); // "oh, no!"
  });
```
