
import UtilsM from './utils.js'

const fs = require('fs')
const path = require('path')

let defaultDirectory = "d://"

window.onload = ()=>{
    init()
}

function init(){
    
    const testFolder = defaultDirectory// __dirname //"c://" // __dirname;
    
    fs.readdir(testFolder, (err, files) => {
        //console.log(files)        
        files = files.filter(f=>!f.startsWith("$")) //remove $files
        //console.log(files)
        d3.select("body").append("svg")
        .append("g")
        .selectAll("image")
        .data(files)
        .enter()
        .append('svg:image')
        .attr("xlink:href", function(f) {return path.resolve('./images/folder.png')})
        .attr('width', "50")
        .attr('height', "50")
        .attr('x', function(d,i){return i*10})
        .attr('y', function(d,i){return i*10})
    });

    let file1 = path.join(__dirname,'bmc1.pdf') 
    let file2 = path.join(__dirname,'bmc1_copy.pdf') //'bmc1_copy.pdf'
    let test = UtilsM.isFileEqual(file1,file2)
    
    d3.select("body").append("text")
    .text(function(){
        if(test)return file1+", "+file2+" are equal!"
        else return file1+", "+file2+" not equal!"
    })
}


