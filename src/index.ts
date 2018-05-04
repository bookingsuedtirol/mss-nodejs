import { Parser } from "cxml";
import * as fs from 'fs';
import * as path from 'path';
import * as getHotelList from '../xmlns/getHotelList';

const parser = new Parser();

const result = parser.parse(fs.createReadStream(path.resolve(__dirname, 'getHotelList.xml')), getHotelList.document);

result.then((doc: getHotelList.document) => {
  console.log(doc.root.result);
});
