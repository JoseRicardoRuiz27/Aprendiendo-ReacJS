const http = require(`node:http`)
const {puertoDisponible} = require("./localPort.js")

const server = http.createServer((request, response) => {
    console.log(`request received`)
    response.end(`Hola Mundo`)
})

puertoDisponible(3001).then(port =>{
    server.listen(3001, () =>{
    console.log(`El servido esta en el puerto http://localhost:${port}`)
})
})

