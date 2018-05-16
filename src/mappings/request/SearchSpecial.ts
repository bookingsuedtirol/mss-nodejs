export default {
  type: "classInfo",
  localName: "SearchSpecial",
  propertyInfos: [
    {
      type: "element",
      name: "offer_id",
      collection: true,
      typeInfo: "Integer"
    },
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
      name: "theme",
      collection: true,
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "validity",
      typeInfo: "Mss.Validity"
    },
    {
      type: "element",
      name: "typ",
      collection: true,
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "premium",
      collection: true,
      typeInfo: "Integer"
    }
  ]
};
