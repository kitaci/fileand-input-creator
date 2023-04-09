
var fs = require("fs");

fs.writeFile('never_created.txt','I am your write file',(err) => {
    console.log("data written succesfully");
})

fs.appendFile('never_created.txt','say helllow',(err) => {
    console.log("data written succesfully");
})
