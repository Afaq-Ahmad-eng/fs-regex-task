//Core modules
const fs = require('fs')
//Internal modules

const cleanUpFunction = (filePath) => {
    try {
        fs.unlinkSync(filePath);

        console.log("Test file cleaned up ");
    } catch (error) {
        console.log("We are in the clean Up Function and in the catch block ", error.message);
        throw error;
    }
}


//export module

module.exports = cleanUpFunction;