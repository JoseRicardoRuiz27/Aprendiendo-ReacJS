const fs = require(`node:fs`)
fs.readFile(`./hola.txt`, `utf-8`, (err, text) =>{
    console.log(text)
})
console.log(`probando probando`)
//readFileSync es una forma Sincrona de Node --> const text = fs.readFile(`./hola.txt`, `utf-8`,)
//readFile es una forma Asincrona
//el readFile necesita de los CallBacks para saber cuando termina