export default {
  type: "classInfo",
  localName: "SearchPriceList",
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
