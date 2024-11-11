export default {
  type: "classInfo",
  localName: "RoomPrice",
  propertyInfos: [
    {
      type: "element",
      name: "room_id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "room_seq",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "offer_id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "price_details",
      wrapperElementName: "price_details",
      collection: true,
      typeInfo: "MSS.Price",
    },
    {
      type: "element",
      name: "price_total",
      typeInfo: "MSS.Price",
    },
    {
      type: "element",
      name: "price_inclusive",
      typeInfo: "MSS.Price",
    },
  ],
};
