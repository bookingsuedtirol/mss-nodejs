export default {
  type: "classInfo",
  localName: "Search",
  propertyInfos: [
    {
      type: "element",
      name: "lang",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "result_id",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "agent",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "id",
      collection: true,
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "search_hotel",
      typeInfo: "Mss.SearchHotel",
    },
    {
      type: "element",
      name: "search_location",
      typeInfo: "Mss.SearchLocation",
    },
    {
      type: "element",
      name: "search_distance",
      typeInfo: "Mss.SearchDistance",
    },
    {
      type: "element",
      name: "search_offer",
      typeInfo: "Mss.SearchOffer",
    },
    {
      type: "element",
      name: "search_lts",
      typeInfo: "Mss.SearchLts",
    },
    {
      type: "element",
      name: "search_special",
      typeInfo: "Mss.SearchSpecial",
    },
    {
      type: "element",
      name: "search_availability",
      typeInfo: "Mss.SearchAvailability",
    },
    {
      type: "element",
      name: "search_pricelist",
      typeInfo: "Mss.SearchPriceList",
    },
    {
      type: "element",
      name: "in",
      collection: true,
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "transaction_id",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "booking_id",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "guest_email",
      typeInfo: "String",
    },
  ],
};
