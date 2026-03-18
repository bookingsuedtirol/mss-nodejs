import jsonix from "jsonix";
const { Jsonix } = jsonix;

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.NlToBr",
  print(text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return text;
  },
  parse(text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return text.replace(/(\r\n|\r|\n)/g, "<br />");
  },
  CLASS_NAME: "CustomTypes.NlToBr",
});
