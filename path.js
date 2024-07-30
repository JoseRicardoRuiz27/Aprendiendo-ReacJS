const path = require(`node:path`)
//el path se utiliza para construir rutas de archivos
//recuperar extenciones o saber si tiene
//unir rutas con path <-- es buena practica

console.log(path.sep) //utilizamos para saber el separador en SO

const filePath = path.join(`content`, `subfolder`, `test.txt`)
console.log(filePath)//utilizamos esta para unir las rutas

const fileName = path.basename(`/tmp/archivo-nombre/nombre.txt`)
console.log(fileName) //lo utilizamos para saber el nombre de un archivo en una ruta

const fileTxt = path.basename(`/tmp/archivo-nombre/nombre.txt`, `.txt`)
console.log(fileTxt) //lo utilizamos para borrar el nombre o parte de un archivo

const extencion = path.extname(`hola.img`)
console.log(extencion) // agregamos una extencion 