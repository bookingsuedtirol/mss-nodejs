import jsonix from "jsonix";
const { Jsonix } = jsonix;

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.PictureURL",
  print: function (url: string) {
    return url;
  },
  parse: function (text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    const url = new URL(text);
    url.host = "cdn.easychannel.it";
    return url.toString();
  },
  CLASS_NAME: "CustomTypes.PictureURL",
});
