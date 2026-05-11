//Core modules
const fs = require('fs');
//Internal modules
const cleanUpFunction = require('./cleanUpFunction');
const verifyFileContentFunction = (filePath) => {
    try {
         if(fs.existsSync(filePath)){
                const content = fs.readFileSync(filePath, 'utf-8');
                console.log("Test file content : ", content);
        
                //Clean up the test file 
                setTimeout(()=>{
                   cleanUpFunction(filePath)
                },5000)
            }else{
                console.log("File doesn't exist ", filePath);
            }
    } catch (error) {
        console.log("We are in the verify file exist function and in the catch block ",error.message);
        throw error;
    }
}

//export 
module.exports = verifyFileContentFunction