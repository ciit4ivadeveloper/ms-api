const Model = require('./model')

async function agregarPais( dato ) {
    const resultado = await new Model( dato )
    return resultado.save()
}

async function obtenerPais( filtro ) {
    let mi_filtro = {}

    if (filtro.codigo != null) {
        mi_filtro = { codigo: filtro.codigo }
    }
    const resultado = await Model.find( mi_filtro )
    return resultado
}


async function actualizarPais(dato) {
    const nuevo_objeto = await Model.findOne( { codigo: dato.codigo } )

    nuevo_objeto.nombre = dato.nombre 
    
    const resultado = await nuevo_objeto.save()
    return resultado
}

async function eliminarPais(dato) {
    const resultado = await Model.deleteOne( {codigo: dato.codigo} )
    return resultado
}

module.exports = {
    agregar:agregarPais,
    obtener:obtenerPais,
    actualizar:actualizarPais,
    eliminar:eliminarPais
}