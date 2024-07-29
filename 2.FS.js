//fs --> file system
const fs = require(`node:fs`)

const stats = fs.statSync(`./hola.txt`)
console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbolico
    stats.size //tamaño de bits
)