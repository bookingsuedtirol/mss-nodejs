export default {
  type: "classInfo",
  localName: "PriceList",
  propertyInfos: [
    {
      type: "element",
      name: "offer_id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "offer_typ",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "offer_base_id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "special_typ",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "prl_mode",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "prl_unit",
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
      name: "title",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "season",
      collection: true,
      typeInfo: "Mss.Season",
    },
  ],
};
