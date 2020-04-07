export default {
  type: "classInfo",
  localName: "SearchAvailability",
  propertyInfos: [
    {
      type: "element",
      name: "date_from",
      typeInfo: "CustomTypes.Date",
    },
    {
      type: "element",
      name: "date_to",
      typeInfo: "CustomTypes.Date",
    },
    {
      type: "element",
      name: "offer_id",
      collection: true,
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "room_id",
      collection: true,
      typeInfo: "Integer",
    },
  ],
};
