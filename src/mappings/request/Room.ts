export default {
  type: "classInfo",
  localName: "Room",
  propertyInfos: [
    {
      type: "element",
      name: "offer_id",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "room_id",
      typeInfo: "Integer",
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
      name: "room_seq",
      typeInfo: "Integer",
    },
    {
      type: "element",
      name: "person",
      collection: true,
      typeInfo: "Integer",
    },
  ],
};
