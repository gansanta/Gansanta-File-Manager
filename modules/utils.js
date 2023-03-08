
let UtilsM = {}

const fs = require('fs')

function isFileEqual(file1, file2){
    let tmpBuf = fs.readFileSync(file1)
    let testBuf = fs.readFileSync(file2)

    let test = tmpBuf.equals(testBuf)
    if(test)return true
    else return false
}

UtilsM.isFileEqual = isFileEqual

export default UtilsM