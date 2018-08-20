const { Jsonix } = require("jsonix");

export default Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
  name: "CustomTypes.Date",
  print: function(date: Date) {
    return date;
  },
  parse: function(text: string) {
    Jsonix.Util.Ensure.ensureString(text);
    return new Date(text);
  },
  CLASS_NAME: "CustomTypes.Date"
});
