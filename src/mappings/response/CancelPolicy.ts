export default {
  type: "classInfo",
  localName: "CancelPolicy",
  propertyInfos: [
    {
      type: "element",
      name: "id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "refundable",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "refundable_until",
      typeInfo: "CustomTypes.Date",
    },
    {
      type: "element",
      name: "penalties",
      wrapperElementName: "penalties",
      collection: true,
      typeInfo: "MSS.Penalty",
    },
    {
      type: "element",
      name: "description",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "priority",
      typeInfo: "String",
    },
  ],
};
