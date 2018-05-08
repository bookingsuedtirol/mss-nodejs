# mss-nodejs

Experimential MSS API wrapper for Node.js projects.

> Warning! Do not use this in production yet!

## Available services

* [x] getHotelList
* [ ] getSpecialList
* [ ] getRoomList
* [ ] getPriceList
* [ ] getRoomAvailability
* [ ] prepareBooking
* [ ] getBooking
* [ ] createInquiry
* [ ] getUserSources

## Example

```js
const { Client } = require('mss-js');

const client = new Client({
  'user' => 'username',
  'password' => 'password',
  'source' => 'source'
});

client
  .request(req => {
    req.header.method = "getHotelList";
    req.request.search.id = ["11230"];
    req.request.options = {
      hotel_details: Request.HotelDetails.BasicInfo | HotelDetails.PaymentOptionsForOnlineBooking
    };

    return req;
  })
  .then(res => {
    const { hotel } = res.result;
    console.log(hotel.name; // => string(18) "Hotel Lichtenstern"
    console.log(hotel.stars); // => float(3)
    console.log(hotel.online_payment.bank.iban); // => string(27) "IT28K0818758740000001021022"
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
