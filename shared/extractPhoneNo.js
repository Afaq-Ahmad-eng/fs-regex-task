//Core modules

//Internal modules
const patterns = require('./patterns');
const contentExtractor = require('./contentExtractor');
const extractPhoneNoFunction = (filePath) => {
    try {
        const content = contentExtractor(filePath);
        const phoneNo = content.match(patterns.phone);
        console.log("Extract the phone numbers ", phoneNo);
        
    } catch (error) {
        console.log("We are in the extract phone No function and in the catch block ", error.message);
        throw error;
    }
}

//export
module.exports = extractPhoneNoFunction;