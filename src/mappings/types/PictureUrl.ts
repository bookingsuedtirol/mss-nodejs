import jsonix from "jsonix";
const { Jsonix } = jsonix;

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.PictureURL",
  print(url: string) {
    return url;
  },
  parse(text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    const url = new URL(text);
    url.host = "cdn.easychannel.it";
    return url.toString();
  },
  CLASS_NAME: "CustomTypes.PictureURL",
});
