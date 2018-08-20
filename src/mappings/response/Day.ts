export default {
  type: "classInfo",
  localName: "Day",
  propertyInfos: [
    {
      type: "element",
      name: "date",
      typeInfo: "CustomTypes.Date"
    },
    {
      type: "element",
      name: "free",
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "restrictions",
      wrapperElementName: "restrictions",
      collection: true,
      typeInfo: "Mss.Restriction"
    }
  ]
};
