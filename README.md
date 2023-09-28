# URL Format String Parser (Without Lodash)

This JavaScript utility function extracts variable parts of a URL format string and maps them to their values in a hash based on a given URL instance. 

## Project Structure :rocket:

Solution can be found under parser.js file [ parseUrl ]

- `url-parser/`: 
    - `parser.js`: Where solution to excercise lives.
    - `index.js`: main project file.
- `test/`: Contains unit tests for the project.
  - `test.js`: The unit test file for testing the parser function
- `package.json`: Project metadata and dependencies.

## Tests Usage

* npm install
* npm test

## Function Explanation :rocket:

The urlParser function takes two arguments:

    urlFormatString: A string that describes the format of a URL. It can contain constant parts and variable parts, where variable parts start with a colon (:).

    urlInstance: A URL instance that matches the format specified in urlFormatString. It may also contain query parameters.

The function returns an object with the variable parts as keys and their corresponding values from the URL instance.

## Example

Given the example URL format string and URL instance:

```javascript
const urlFormatString = '/:version/api/:collection/:id';
const urlInstance = '/6/api/listings/3?sort=desc&limit=10';

const result = urlParser(urlFormatString, urlInstance);
console.log(result);
```


