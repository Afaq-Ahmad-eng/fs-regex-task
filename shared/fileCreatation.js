//Core modules
const fs = require('fs');
//Inernal modules

const fileCreationFunction = (filePath) => {
    try {
        fs.writeFileSync(filePath, "This is our new file!");
    } catch (error) {
        console.log("In the file creation function and in the ctach block ",error.message);
        throw error;
    }
}


//export
module.exports = fileCreationFunction;