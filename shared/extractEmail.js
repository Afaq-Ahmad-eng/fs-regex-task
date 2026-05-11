//Internal modules
const patterns = require('./patterns');
const contentExtractorFunction = require('./contentExtractor');

//function which we use to extract the email from file
const extractEmail = (filePath) => {
    try {
        const contacts = contentExtractorFunction(filePath);
        const extractEmails = contacts.match(patterns.email);
        console.log("Extract all the emails ", extractEmails);
        
    } catch (error) {
        console.log("We get error in the extractEmail function and we are in the catch block ", error.message);
        throw error;
    }
}

//export 
module.exports = extractEmail;