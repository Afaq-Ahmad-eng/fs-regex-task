//Core modules
const fs = require('fs');
//Internal modules
const contentExtractorFunction = (filePath) => {
    try {
        const contacts = fs.readFileSync(filePath, "utf-8");
        return contacts;
    } catch (error) {
        console.log("We are in the content Extractor Function and in the catch block ",error.message);
        throw error;
    }
}

//export
module.exports = contentExtractorFunction