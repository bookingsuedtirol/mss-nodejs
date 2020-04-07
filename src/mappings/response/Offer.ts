export default {
  type: "classInfo",
  localName: "Offer",
  propertyInfos: [
    {
      type: "element",
      name: "offer_id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "offer_gid",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "offer_base_id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "offer_typ",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "offer_show",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "offer_title",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "title",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "offer_description",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "description",
      typeInfo: "CustomTypes.NlToBr",
    },
    {
      type: "element",
      name: "pictures",
      wrapperElementName: "pictures",
      collection: true,
      typeInfo: "Mss.Picture",
    },
    {
      type: "element",
      name: "themes",
      wrapperElementName: "themes",
      collection: true,
      typeInfo: "Mss.Theme",
    },
  ],
};
