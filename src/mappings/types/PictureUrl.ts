import jsonix from "jsonix";
const { Jsonix } = jsonix;

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.PictureURL",
  print: function (url: URL) {
    return url.toJSON();
  },
  parse: function (text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    const u = new URL(text);
    u.host = "cdn.easychannel.it";
    return u;
  },
  CLASS_NAME: "CustomTypes.PictureURL",
});
