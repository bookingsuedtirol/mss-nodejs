import jsonix from "jsonix";
const { Jsonix } = jsonix;

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.CommaSeparatedList",
  print(list: string[]) {
    return list;
  },
  parse(text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return text.split(",").map((v) => v.trim());
  },
  CLASS_NAME: "CustomTypes.CommaSeparatedList",
});
