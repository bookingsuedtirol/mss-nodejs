import jsonix from "jsonix";
import nl2br from "nl2br";
const { Jsonix } = jsonix;

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.NlToBr",
  print: function (text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return text;
  },
  parse: function (text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return nl2br(text, true);
  },
  CLASS_NAME: "CustomTypes.NlToBr",
});
