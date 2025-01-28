import jsonix from "jsonix";
const { Jsonix } = jsonix;

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.Boolean",
  print(value: boolean) {
    Jsonix.Util.Ensure.ensureBoolean(value);
    return value ? "1" : "0";
  },
  parse(text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return text === "1";
  },
  CLASS_NAME: "CustomTypes.Boolean",
});
