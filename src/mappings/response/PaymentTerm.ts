export default {
  type: "classInfo",
  localName: "PaymentTerm",
  propertyInfos: [
    {
      type: "element",
      name: "id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "owner_id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "methods",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "prepayment",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "ccards",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "priority",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "bank",
      typeInfo: "Mss.Bank",
    },
    {
      type: "element",
      name: "description",
      typeInfo: "String",
    },
  ],
};
