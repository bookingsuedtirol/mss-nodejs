export default {
  type: "classInfo",
  localName: "SearchAvailability",
  propertyInfos: [
    {
      type: "element",
      name: "date_from",
      typeInfo: "DateAsDate"
    },
    {
      type: "element",
      name: "date_to",
      typeInfo: "DateAsDate"
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
