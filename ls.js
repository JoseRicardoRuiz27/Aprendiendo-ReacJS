const fs = require(`node:fs`)

fs.readdir(`.`, (err, file) =>{
    if(err){
        console.log(`Le erraste amigo`, err)
        return;
    }
    file.forEach(file => {
        console.log(file)
    });
})