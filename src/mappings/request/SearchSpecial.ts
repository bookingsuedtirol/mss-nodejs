export default {
  type: "classInfo",
  localName: "SearchSpecial",
  propertyInfos: [
    {
      type: "element",
      name: "offer_id",
      collection: true,
      typeInfo: "Integer",
    },
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
      name: "theme",
      collection: true,
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "validity",
      typeInfo: "MSS.Validity",
    },
    {
      type: "element",
      name: "typ",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "premium",
      typeInfo: "Integer",
    },
  ],
};
