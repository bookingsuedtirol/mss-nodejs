export default {
  type: "classInfo",
  localName: "SearchPriceList",
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
      name: "room_id",
      collection: true,
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "typ",
      typeInfo: "Integer"
    }
  ]
};
