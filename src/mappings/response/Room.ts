export default {
  type: "classInfo",
  localName: "Room",
  propertyInfos: [
    {
      type: "element",
      name: "room_id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "room_lts_id",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "service",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "room_type",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "room_code",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "room_title",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "room_description",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "title",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "description",
      typeInfo: "CustomTypes.NlToBr",
    },
    {
      type: "element",
      name: "room_persons",
      typeInfo: "String",
    },
    {
      type: "element",
      name: "room_free",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "features",
      typeInfo: "Integer",
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
      name: "room_free",
      typeInfo: "Decimal",
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
      name: "room_price",
      collection: true,
      typeInfo: "MSS.Price",
    },
    {
      type: "element",
      name: "properties",
      typeInfo: "MSS.Properties",
    },
    {
      type: "element",
      name: "occupancy",
      typeInfo: "MSS.Occupancy",
    },
    {
      type: "element",
      name: "room_numbers",
      wrapperElementName: "room_numbers",
      collection: true,
      typeInfo: "String",
    },
    {
      type: "element",
      name: "room_details",
      wrapperElementName: "room_details",
      collection: true,
      typeInfo: "MSS.RoomDetail",
    },
    {
      type: "element",
      name: "days",
      wrapperElementName: "days",
      collection: true,
      typeInfo: "MSS.Day",
    },
    {
      type: "element",
      name: "price_from",
      typeInfo: "Decimal",
    },
    {
      type: "element",
      name: "pricelist",
      collection: true,
      typeInfo: "MSS.PriceList",
    },
  ],
};
