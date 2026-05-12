//core modules

//Internal modules
const patterns = require('./patterns');
const contentExtractorFunction = require('./contentExtractor');
const extractNameFunction = (filePath) => {
    try {
        const contents = contentExtractorFunction(filePath);
        
        const Names = contents.match(patterns.name);
        console.log("Extract the name from the file ", Names);
         
    } catch (error) {
        console.log("We are in the extract name function and in the catch block ", error.message);
        throw error;
    }
}

//export
module.exports = extractNameFunction;