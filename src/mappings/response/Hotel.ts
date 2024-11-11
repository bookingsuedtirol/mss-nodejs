export default {
  type: "classInfo",
  localName: "Hotel",
  propertyInfos: [
    {
      type: "element",
      name: "id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "id_lts",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "bookable",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "name",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "cin",
      typeInfo: "CustomTypes.CommaSeparatedList",
    },
    {
      type: "element",
      name: "type",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "stars",
      typeInfo: "Double",
    },
    {
      type: "element",
      name: "address",
      typeInfo: "MSS.Address",
    },
    {
      type: "element",
      name: "features",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "location",
      typeInfo: "MSS.Location",
    },
    {
      type: "element",
      name: "location_name",
      typeInfo: "MSS.LocationName",
    },
    {
      type: "element",
      name: "geolocation",
      typeInfo: "MSS.Geolocation",
    },
    {
      type: "element",
      name: "contact",
      typeInfo: "MSS.Contact",
    },
    {
      type: "element",
      name: "headline",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "description",
      typeInfo: "CustomTypes.NlToBr",
    },
    {
      type: "element",
      name: "hotel_payment",
      typeInfo: "MSS.HotelPayment",
    },
    {
      type: "element",
      name: "matching",
      typeInfo: "MSS.Matching",
    },
    {
      type: "element",
      name: "logo",
      wrapperElementName: "logo",
      typeInfo: "MSS.Picture",
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
      name: "picture_groups",
      wrapperElementName: "picture_groups",
      collection: true,
      typeInfo: "MSS.PictureGroup",
    },
    {
      type: "element",
      name: "gallery",
      wrapperElementName: "gallery",
      collection: true,
      typeInfo: "MSS.Picture",
    },
    {
      type: "element",
      name: "channel",
      typeInfo: "MSS.Channel",
    },
    {
      type: "element",
      name: "features_view",
      wrapperElementName: "features_view",
      collection: true,
      typeInfo: "MSS.Feature",
    },
    {
      type: "element",
      name: "lts_data",
      typeInfo: "MSS.LtsData",
    },
    {
      type: "element",
      name: "pos",
      wrapperElementName: "pos",
      collection: true,
      typeInfo: "String",
    },
    {
      type: "element",
      name: "price_engine",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "language",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "check_in",
      typeInfo: "MSS.CheckInOut",
    },
    {
      type: "element",
      name: "check_out",
      typeInfo: "MSS.CheckInOut",
    },
    {
      type: "element",
      name: "price_from",
      typeInfo: "Decimal",
    },
    {
      type: "element",
      name: "board",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "pers_age_min",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "ratings",
      wrapperElementName: "ratings",
      collection: true,
      typeInfo: "MSS.Rating",
    },
  ],
};
