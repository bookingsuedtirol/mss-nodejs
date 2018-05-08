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
import * as mss from 'mss-js';

const request = {
  header: {
    method: "getHotelList"
  },
  request: {
    search: {
      id: ["11230"]
    }
    options: {
      hotel_details:
        HotelDetails.BasicInfo |
        HotelDetails.PaymentOptionsForOnlineBooking
    }
  }
};

mss(request).then(res => {
  const { hotel } = res.root.result.hotel[0];
  console.log(hotel.name; // => string(18) "Hotel Lichtenstern"
  console.log(hotel.stars); // => float(3)
  console.log(hotel.online_payment.bank.iban); // => string(27) "IT28K0818758740000001021022"
});
```

## Exception handling

If the MSS returns an error response, an exception is thrown.

```js
mss(request).then(res => {
  ...
}).catch(e => {
  console.log(e); // "oh, no!"
});
```
