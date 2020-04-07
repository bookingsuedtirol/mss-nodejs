export default {
  type: "classInfo",
  localName: "SearchPriceList",
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
      name: "room_id",
      collection: true,
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "typ",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "service",
      typeInfo: "Integer",
    },
  ],
};
