const fs = require('fs');
const data = require("../../../cucumber-json/Login.cucumber.json");
let fileData = '|SVaP|SRS|RESULT|\n|---|---|---|\n';
var path= require('path');

if(data.length){
    const scenarios = data[0].elements;
    scenarios.forEach(s => {
        const tags = s.tags.map(t => t.name);
        const svapTag = tags.find(t => t.startsWith('@SVAP:'));
        const srsTag = tags.find(t => t.startsWith("@SRS:"));
        const nonPassSteps = s.steps.map(s => s.result).map(r => r.status).filter(r => r !== "passed");
        let result = "PASS";
        if (nonPassSteps.length){
            result = "FAIL";
        }
        fileData += `|${svapTag.replace("@SVAP:", "")}|${srsTag.replace("@SRS:", "")}|${result}|\n`;
    })
}

fs.writeFile(path.resolve(`${process.cwd()}/cypress/report/result-data.md`), fileData, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
});