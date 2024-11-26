export default {
  type: "classInfo",
  localName: "Special",
  propertyInfos: [
    {
      type: "element",
      name: "offer_id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "status",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "valid",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "offer_typ",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "special_typ",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "special_premium",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "days_arrival",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "days_departure",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "days_dur_min",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "days_dur_max",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "days_arrival_min",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "days_arrival_max",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "children_min",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "children_max",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "adults_min",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "adults_max",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "pers_age_min",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "child_age_min",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "child_age_max",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "adult_age_min",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "valid_start",
      typeInfo: "CustomTypes.Date",
    },
    {
      type: "element",
      name: "valid_end",
      typeInfo: "CustomTypes.Date",
    },
    {
      type: "element",
      name: "title",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "description",
      typeInfo: "CustomTypes.NormalizedHTMLString",
    },
    {
      type: "element",
      name: "hotels",
      wrapperElementName: "hotels",
      collection: true,
      typeInfo: "MSS.Hotel",
    },
    {
      type: "element",
      name: "seasons",
      wrapperElementName: "seasons",
      collection: true,
      typeInfo: "MSS.Season",
    },
    {
      type: "element",
      name: "services",
      wrapperElementName: "services",
      collection: true,
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "inclusive",
      wrapperElementName: "inclusive",
      collection: true,
      typeInfo: "MSS.Price",
    },
    {
      type: "element",
      name: "pictures",
      wrapperElementName: "pictures",
      collection: true,
      typeInfo: "MSS.Picture",
    },
    {
      type: "element",
      name: "themes",
      wrapperElementName: "themes",
      collection: true,
      typeInfo: "MSS.Theme",
    },
  ],
};
