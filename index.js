

// index.js
import  urlParser  from "./parser.js";
  
const urlFormatString = '/:version/api/:collection/:id';
const urlInstance = '/6/api/listings/3?sort=desc&limit=10';
const parsedUrlVariables = urlParser(urlFormatString, urlInstance);

console.log(parsedUrlVariables);