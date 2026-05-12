//Core module

//Internal modules
const patterns = require('./patterns');
const contentExtractor = require('./contentExtractor');
const dateExtractorFunction = (filePath) => {
    try {
        const content = contentExtractor(filePath);
        const AllDates = content.match(patterns.date);
        console.log("Extract the date of all the individual person ", AllDates);
        
    } catch (error) {
        console.log("We are in the date extractor function and in the catch block ",error.message);
        throw error;
    }
}

//export
module.exports = dateExtractorFunction;