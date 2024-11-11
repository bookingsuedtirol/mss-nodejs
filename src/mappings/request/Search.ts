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
      typeInfo: "MSS.SearchHotel",
    },
    {
      type: "element",
      name: "search_location",
      typeInfo: "MSS.SearchLocation",
    },
    {
      type: "element",
      name: "search_distance",
      typeInfo: "MSS.SearchDistance",
    },
    {
      type: "element",
      name: "search_offer",
      typeInfo: "MSS.SearchOffer",
    },
    {
      type: "element",
      name: "search_lts",
      typeInfo: "MSS.SearchLts",
    },
    {
      type: "element",
      name: "search_special",
      typeInfo: "MSS.SearchSpecial",
    },
    {
      type: "element",
      name: "search_availability",
      typeInfo: "MSS.SearchAvailability",
    },
    {
      type: "element",
      name: "search_pricelist",
      typeInfo: "MSS.SearchPriceList",
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
    {
      type: "element",
      name: "pic_group_id",
      typeInfo: "Integer",
    },
  ],
};
