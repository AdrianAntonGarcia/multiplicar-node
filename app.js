const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado:`, colors.green(archivo));
        }).catch(e => console.log(e));
        break;
        0
    default:
        console.log('comando no reconocido');
        break;
}

// console.log('base', argv.base);
// console.log('limite', argv.limite);
// console.log(argv);



// requireds
// Ya existentes en node
// const fs = require('fs');
// Externas
// const fs = require('express');
// archivos que nosotros creamos en el proyecto
// const fs = require('./path');



// let base = '5';

// console.log(process.argv);

// let parametro = argv[2];

// let base = parametro.split('=')[1];



// Modulo global a toda la aplicación
// console.log(module);
// crearArchivo(base).then(archivo => {
//     console.log(`Archivo creado: ${archivo}`);
// }).catch(e => console.log(e));

// let leer = async() => {
//     let archivo = await crearArchivo(4);
//     console.log(archivo);
// }
// leer();
// crearArchivo(base).then(archivo => console.log(`archivo creado: ${ archivo}`));