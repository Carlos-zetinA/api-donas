function getFilePath(file){
    const filePat = file.path;
    const fileSplit = filePat.split("\\");
    return `${fileSplit[0]}/${fileSplit[1]}`
}

module.exports = {
    getFilePath
}