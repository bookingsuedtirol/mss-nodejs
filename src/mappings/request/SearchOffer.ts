export default {
  type: "classInfo",
  localName: "SearchOffer",
  propertyInfos: [
    {
      type: "element",
      name: "arrival",
      typeInfo: "CustomTypes.Date"
    },
    {
      type: "element",
      name: "departure",
      typeInfo: "CustomTypes.Date"
    },
    {
      type: "element",
      name: "service",
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "room",
      collection: true,
      typeInfo: "Mss.Room"
    },
    {
      type: "element",
      name: "feature",
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "theme",
      typeInfo: "Integer"
    }
  ]
};
