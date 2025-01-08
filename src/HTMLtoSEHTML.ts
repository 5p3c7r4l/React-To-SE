const path = require('path');
const fs = require('node:fs');

export default function HTMLBundle (root:string='.'): number {
    const pathOfHTML = path.resolve(`${root}/public/index.html`)
    const pathToSEhtml = path.resolve(`${root}/bundle/index.txt`)
    if (fs.existsSync(path.resolve(`${root}/bundle`))) {
    console.log(pathToSEhtml);
    fs.readFile(pathOfHTML, 'utf-8', (err:string,data:string) =>{
        err ? (()=>{throw new Error(err)}):{};
        const cutHTML = data.split(/\r?\n|\r|\n/g);
        var checkBody = false;
        for (let i = 0; i < cutHTML.length; i++) {
            cutHTML[i].trim()
            if (cutHTML[i].trim() === "</body>") {checkBody = false}
            if (checkBody) {fs.writeFile(pathToSEhtml,cutHTML[i].trim(),(err:string)=>{if(err){console.error(err)}})}
            if (cutHTML[i].trim() === "<body>") {checkBody = true}
        }
    });
    return 1;
    } else {throw new Error(`ERROR: ${root}bundle/ directory does not exist`);}
};
