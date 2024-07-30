//las promesas son las formas mas comunes de los fs
// const fs = require(`node:fs/promises`)
// fs.readFile(`./hola.txt`, `utf-8`,).then(text=>{
//     console.log(text)
// })

//si no tenemos /promises podemos utilizar:
// const { promisify } = require("node:util")
// const readFile = promisify(fs.readFile)
// readFile(`./hola.txt`, `utf-8`)

//con async await
// IIFE --> funcion que invocamos cuando la estamos creando
/* (() =>{}
    )()
*/

// const { readFile } = require(`node:fs/promises`);
// (
//     async() => {
//         const text = await readFile(`./hola.txt`, `utf-8`)
//         console.log(text)
// }
// )()

//la segunda forma es creando un archivo mjs con el siguiente codigo:
/* 
    import {readFile} from `node:fs/promises`
    const text = await readFile(`./hola.txt`, `utf-8`)
    console.log(text)
*/
//forma async en paralelo --> se ejecuta con mjs
//con esta forma podemos darle dos trabajos al readFile

// const { readFile } = require(`node:fs/promises`);
// Promise.all([
//     readFile(`./hola.txt`, `uft-8`)
// ]).then(([text])=>{
//     console.log(`unico texto`, text)
// })