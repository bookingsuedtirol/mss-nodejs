import jsonix from "jsonix";
const { Jsonix } = jsonix;

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.CommaSeparatedList",
  print: function (list: string[]) {
    return list;
  },
  parse: function (text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return text.split(",").map((v) => v.trim());
  },
  CLASS_NAME: "CustomTypes.CommaSeparatedList",
});
