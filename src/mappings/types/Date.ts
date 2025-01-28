import jsonix from "jsonix";
const { Jsonix } = jsonix;

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.Date",
  print(date: Date) {
    return date.toJSON();
  },
  parse(text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return new Date(text);
  },
  CLASS_NAME: "CustomTypes.Date",
});
