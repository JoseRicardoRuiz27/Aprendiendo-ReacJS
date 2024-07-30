console.log(process.argv) //argv son los argumentos que van a recibir en la linea de comando
//process es un objeto global que proporciona informacion y control
//sobre el proceso actual de ejecucion

//process.exit() 
// lo utilizamos para controlar el proceso y su salida
// 0 es que todo salio correcto y 1 es que salio pero con un error

/*
process.on(`exit`, ()=>{
    cuanto sale podemos limpiar los recursos o la consola
})
 */

console.log(process.cwd()) //podemos localizar la carpeta que esta realizando el proceso

console.log(process.env.NODE_ENV) // plataforma y variable de entorno