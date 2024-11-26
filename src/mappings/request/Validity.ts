export default {
  type: "classInfo",
  localName: "Validity",
  propertyInfos: [
    {
      type: "element",
      name: "valid",
      typeInfo: "CustomTypes.Boolean",
    },
    {
      type: "element",
      name: "offers",
      typeInfo: "CustomTypes.Boolean",
    },
    {
      type: "element",
      name: "arrival",
      typeInfo: "CustomTypes.Date",
    },
    {
      type: "element",
      name: "departure",
      typeInfo: "CustomTypes.Date",
    },
    {
      type: "element",
      name: "service",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "room",
      collection: true,
      typeInfo: "MSS.Room",
    },
  ],
};
