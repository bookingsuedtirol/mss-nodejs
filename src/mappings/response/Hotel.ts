export default {
  type: "classInfo",
  localName: "Hotel",
  propertyInfos: [
    {
      type: "element",
      name: "id",
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "id_lts",
      typeInfo: "String"
    },
    {
      type: "element",
      name: "bookable",
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "name",
      typeInfo: "String"
    },
    {
      type: "element",
      name: "type",
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "stars",
      typeInfo: "Double"
    },
    {
      type: "element",
      name: "address",
      typeInfo: "Mss.Address"
    },
    {
      type: "element",
      name: "features",
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "location",
      typeInfo: "Mss.Location"
    },
    {
      type: "element",
      name: "location_name",
      typeInfo: "Mss.LocationName"
    },
    {
      type: "element",
      name: "geolocation",
      typeInfo: "Mss.Geolocation"
    },
    {
      type: "element",
      name: "contact",
      typeInfo: "Mss.Contact"
    },
    {
      type: "element",
      name: "headline",
      typeInfo: "String"
    },
    {
      type: "element",
      name: "description",
      typeInfo: "String"
    },
    {
      type: "element",
      name: "online_payment",
      typeInfo: "Mss.Payment"
    },
    {
      type: "element",
      name: "hotel_payment",
      typeInfo: "Mss.Payment"
    },
    {
      type: "element",
      name: "matching",
      typeInfo: "Mss.Matching"
    },
    {
      type: "element",
      name: "logo",
      wrapperElementName: "logo",
      collection: true,
      typeInfo: "Mss.Picture"
    },
    {
      type: "element",
      name: "pictures",
      wrapperElementName: "pictures",
      collection: true,
      typeInfo: "Mss.Picture"
    },
    {
      type: "element",
      name: "gallery",
      wrapperElementName: "gallery",
      collection: true,
      typeInfo: "Mss.Picture"
    },
    {
      type: "element",
      name: "channel",
      typeInfo: "Mss.Channel"
    },
    {
      type: "element",
      name: "features_view",
      wrapperElementName: "features_view",
      collection: true,
      typeInfo: "Mss.Feature"
    },
    {
      type: "element",
      name: "lts_data",
      typeInfo: "Mss.LtsData"
    },
    {
      type: "element",
      name: "pos",
      wrapperElementName: "pos",
      collection: true,
      typeInfo: "String"
    },
    {
      type: "element",
      name: "price_engine",
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "language",
      typeInfo: "String"
    },
    {
      type: "element",
      name: "check_in",
      typeInfo: "Mss.CheckInOut"
    },
    {
      type: "element",
      name: "check_out",
      typeInfo: "Mss.CheckInOut"
    },
    {
      type: "element",
      name: "price_from",
      typeInfo: "Decimal"
    },
    {
      type: "element",
      name: "pers_age_min",
      typeInfo: "Integer"
    },
    {
      type: "element",
      name: "ratings",
      wrapperElementName: "ratings",
      collection: true,
      typeInfo: "Mss.Rating"
    }
  ]
};
