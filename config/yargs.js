const { string } = require('yargs');

const opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Descripción de la tarea por hacer"
    },
    completado: {
        alias: 'c',
        default: true,
        desc: "Marca como completada la tarea",
        type: 'boolean'
    }

}

const argv = require('yargs')

.command('crear', 'Crea una tarea', opt)
    .command('actualizar', 'Actualiza una tarea', opt)
    .command('borrar', 'Elimina una tarea', opt)
    .help()
    .argv;

module.exports = {
    argv
}