const fs = require(`node:fs/promises`)
const path = require("node:path")
const picocolors = require(`picocolors`)

//[0] es node
//[1] es el fichero
const folder = process.argv[2] ?? `.`
async function ls(folder) {
    let files
    try {
    files = await fs.readdir(folder)
    } catch {
        console.log(picocolors.red`No se pudo leer el directorio ${folder}`)
        process.exit[1]
    }

    const filePromise = files.map(async file =>{
        const filePath = path.join(folder, file)
        let fileStat
    try {
        fileStat = await fs.stat(filePath)
    } catch {
        console.log(picocolors.red`No se pudo leer la informacion`)
        process.exit[1]
    }

    const isDirectory = fileStat.isDirectory()
    const symbol = isDirectory ? `d` : `f`
    const fileSize = fileStat.size
    const fileModified = fileStat.mtime.toLocaleDateString()

    return `${picocolors.blue( symbol )} ${picocolors.blue( file.padEnd(20) )} ${picocolors.green( fileSize.toString()
        .padStart(10) )} ${picocolors.green( fileModified )}`
   })

   const fileInfo = await Promise.all(filePromise)
   fileInfo.forEach(filesInfo => console.log(filesInfo))
}
ls(folder)