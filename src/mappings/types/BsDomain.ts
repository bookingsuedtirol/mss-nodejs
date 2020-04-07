const { Jsonix } = require("jsonix");

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.BsDomain",
  print: function (text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return text;
  },
  parse: function (text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return text.replace("easymailing.eu", "bookingsuedtirol.com");
  },
  CLASS_NAME: "CustomTypes.BsDomain",
});
