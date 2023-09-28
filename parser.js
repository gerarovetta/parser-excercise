/**
* Utility function extracts variable parts of a URL format string and maps them to their values
* @param {string} urlFormatString - A string that describes the format of a URL
* @param {string} urlInstance - A URL instance that matches the format specified in urlFormatString
* @returns {Object} - An object containing the variable parts mapped to their values
*/
function urlParser(urlFormatString, urlInstance) {
    
    const variableNames = [];
    const formatParts = urlFormatString.split('/'); //URL format string
    const urlParts = urlInstance.split('?')[0].split('/'); //we do not need the query string here
    const variableMap = {}; // return object
    
    // Parse the URL format string to extract variable names.
    for (let i = 0; i < formatParts.length; i++) {
        const formatPart = formatParts[i];
        const urlPart = urlParts[i];
    
        if (formatPart.startsWith(':')) {
          // This is a variable so we extract the variable name 
          // from the format and value from url instance.
          const variableName = formatPart.slice(1);
          variableMap[variableName] = urlPart;
        }
      }
     // Now we can parse query parameters from the url instance and make use of URLSearchParams
    const queryString= urlInstance.split('?')[1]; // obtain query information
    if (queryString) { 
        const queryParams = new URLSearchParams(queryString);
        queryParams.forEach((value, key) => {
        variableMap[key] = value;
        });
    }
    console.log(variableMap);
    return variableMap;
}

export default urlParser;