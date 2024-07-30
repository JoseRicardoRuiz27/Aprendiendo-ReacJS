const fs = require(`node:fs/promises`)


//[0] es node
//[1] es el fichero
const folder = process.argv[2] ?? `.`

fs.readdir(folder)
    .then(files => {
        files.forEach(file => {
        console.log(file)
    })
})
.catch(err => {
    if (err) {
        console.log(`Le erraste amigo`, err)
        return;
    }
})