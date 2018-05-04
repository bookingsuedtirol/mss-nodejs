import { Parser } from "cxml";
import * as fs from 'fs';
import * as path from 'path';
import * as mss from '../xmlns/mss';

const parser = new Parser();

const result = parser.parse(fs.createReadStream(path.resolve(__dirname, 'mss.xml')), mss.document);

result.then((doc: mss.document) => {  
  console.log(doc.root.result.hotel.map(hotel => hotel.name));
});
