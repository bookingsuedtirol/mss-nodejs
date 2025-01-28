import jsonix from "jsonix";
import sanitizeHTML from "sanitize-html";

const { Jsonix } = jsonix;

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.NormalizedHTMLString",
  print(text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return text;
  },
  parse(text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return sanitizeHTML(text.replaceAll("\r\n", "\n"), {
      allowedTags: ["b", "br", "em", "i", "li", "ol", "p", "strong", "u", "ul"],
    });
  },
  CLASS_NAME: "CustomTypes.NormalizedHTMLString",
});
