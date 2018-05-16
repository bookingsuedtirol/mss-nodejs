export default {
  type: "classInfo",
  localName: "SearchAvailability",
  propertyInfos: [
    {
      type: "element",
      name: "date_from",
      typeInfo: "Date"
    },
    {
      type: "element",
      name: "date_to",
      typeInfo: "Date"
    },
    {
      type: "element",
      name: "offer_id",
      collection: true,
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "room_id",
      collection: true,
      typeInfo: "Integer"
    }
  ]
};
