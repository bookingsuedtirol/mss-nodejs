import jsonix from "jsonix";
const { Jsonix } = jsonix;

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.Boolean",
  print: function (value: boolean) {
    Jsonix.Util.Ensure.ensureBoolean(value);
    return value ? "1" : "0";
  },
  parse: function (text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return text === "1";
  },
  CLASS_NAME: "CustomTypes.Boolean",
});
