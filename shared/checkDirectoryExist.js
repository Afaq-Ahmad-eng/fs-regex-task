//Core modules

//Internal modules

//function to check that directory exist or not 
const checkDirectoryExist = (directories) => {
    try {
        directories.forEach(directory => {
        const directoryPath = path.join(__dirname, directory);
        if(!fs.existsSync(directoryPath)){
            fs.mkdirSync(directoryPath, {recursive: true});
            console.log("Directory is created ", directory);
        }else{
            console.log("Directory exist ", directory);
        }
    })
    } catch (error) {
        console.log("In the Check directory Exist function and in the catch block ",error.message);
        throw error;
    }
}


//export
module.exports = checkDirectoryExist 