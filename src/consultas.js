/* Consultas simples */

/* Buscamos las cámaras que tienen estabilizador */
db.camaras.find({"modelo.estabilizador": {$eq:true}})
//FORMA EQUIVALENTE
db.camaras.find({"modelo.estabilizador": true})

/* Buscamos todas las cámaras que tengan más de 30 fps de grabación */
db.camaras.find({fpsgrabacion: {$gt:30}})

/* Buscamos todas las cámaras que tengan al menos 28 megapixeles */
db.camaras.find({"modelo.megapixeles": {$gte:28}})

/* Buscamos todas las cámaras que tengan menos de 140mm de ancho */
db.camaras.find({"dimensiones.ancho":{$lt: 140}})

/* Buscamos todas las cámaras que tengan un precio menor o igual a 1300 euros */
db.camaras.find({"odc.precio": {$lte:1300}})

/* Buscamos todas las cámaras que no tengan conexión bluetooth */
db.camaras.find( {"conexion.bluetooth":{$ne: true}})
//FORMA EQUIVALENTE 
db.camaras.find( {"conexion.bluetooth":{$not: {$eq:true}}})

/* Buscamos todas las cámaras que tengan objetivo normal o teleobjetivo */
db.camaras.find({objetivo: {$in: ["Normal","Teleobjetivo"]}})
/* Esta forma es equivalente pero cuando queramos buscar dos opciones de un mismo campo es mejor usar 
el operador $in */
db.camaras.find( {$or: [{objetivo:"Normal"},{objetivo:"Teleobjetivo"}]})

/* Buscamos todas las cámaras que tienen objetivo Ojo de pez o opdión de compra en color azul */
db.camaras.find({$or: [{objetivo: "Ojo de pez"},{"odc.color":"azul"}] })

/* Buscamos todas las cámaras que no sean de la Marca Sony ni la Canon */
db.camaras.find( {"modelo.marca": {$nin: ["Sony","Canon"]}} ) 
/* Esta forma es equivalente pero cuando queramos buscar dos opciones de un mismo campo es mejor usar 
el operador $nin */
db.camaras.find( {$nor: [{"modelo.marca":"Sony"},{"modelo.marca":"Canon"}] } )

/* Buscamos todas las cámaras que no tengan objetivo gran angular ni garantia de 2 años*/
db.camaras.find({$nor:[{objetivo:"Gran angular"},{garantia:2}] })

/* Buscamos todas las cámaras que tienen garantía */
db.camaras.find( {garantia: {$exists:true}} )

/* Buscamos todas las cámaras que en su nombre de modelo empiezen por e y sin sensibilidad a mayúsculas o minúsculas */
db.camaras.find( {"modelo.nombre": {$regex:/^e/i}} )

/* Buscamos todas las cámaras que en el campo tipo array memoriascompatibles tienen los valores "SDHC","SD" */
db.camaras.find({memoriascompatibles: {$all: ["SDHC","SD"] } })

/* Buscamos todas las cámaras que tienen al menos una opción de compra con el color blanco y con precio menor a 1000 euros */
db.camaras.find({"odc": {$elemMatch: {color:{$eq:"blanco"},precio: {$lt:1000} } } })

/* Buscamos todas las cámaras que tienen 2 opciones de fps de grabación */
db.camaras.find( {fpsgrabacion: {$size: 2}})

/* Consultas complejas(varios operadores)*/

/* Estoy buscando con mi padre qué cámara de fotos comprar para un viaje a París y tenemos un presupuesto de 1300 euros,queremos que la cámara venga con estabilizador y 
que tenga wifi y bluetooth, y además se haya fabricado este año para que sea la más nueva posible . */
db.camaras.find( {$and: [ {"odc.precio": {$lte:1300}},{"modelo.estabilizador": {$eq:true}},{"conexion.wifi": {$eq:true}},{"conexion.bluetooth": {$eq:true}},{"fecha.fabricacion":{$gt: new Date("2021-01-01")}} ] } )

/* Mi madre me ha dicho que no le gusta la marca Sony ni la Canon y además quiere que la cámara tenga la opción de compra en azul y que grabe a más de 30 fps. */
db.camaras.find( {$and: [ {"modelo.marca": {$nin: ["Sony","Canon"]}},{"odc.color":{$eq:"azul"}},{fpsgrabacion: {$gt:30} } ] } )

/* Un amigo quiere saber cuantas cámaras tienen garantía y además quiere saber qué cámaras hay que pesen más de medio kilo por que no le gustan las cámaras ligeras, que tengan 28 
o más megapixeles, que tengan un objetivo normal o teleobjetivo y con garantía. */
db.camaras.find( {garantia: {$exists:true} }).count()
db.camaras.find( {$and: [ {"dimensiones.peso": {$gt:"500g"}},{"modelo.megapixeles": {$gte:28}},{objetivo: {$in: ["Normal","Teleobjetivo"]}},{garantia: {$exists:true}} ] } )

/* Mi hermano quiere buscar una cámara que tenga la opción de comprarla en color blanco y tiene un presupuesto de menos de 1000 euros,además quiere que tenga
almenos 60fps de grabación o que tenga al menos 3 colores disponibles con sus respectivos precios y que su fecha de lanzamiento sea a partir del mes de mayo que son los modelos
mas actuales. */
db.camaras.find( {$and: [ {"odc": {$elemMatch: {color:{$eq:"blanco"},precio: {$lt:1000} } } },{$or: [{fpsgrabacion: {gte:60}},{odc:{$size: 3}}] },{"fecha.lanzamiento":{$gt: new Date("2021-05-01")}} ] } )

/* Para una sesión de fotos profesional me han pedido buscar una cámara que tenga unas memorias compatibles específicas las cuales son ["SDHC","SD"] para poder guardar 
las fotos y grabaciones, pero no quiere que tenga un objetivo angular ni altura menor a 80mm porque no le cabe en su mochila,y quiere los modelos los cuales su nombre empiezan por 
eos por que no recuerda exactamente cual era el modelo que le gustaba */
db.camaras.find( {$and: [ {memoriascompatibles: {$all: ["SDHC","SD"] } },{$nor:[{objetivo:{$eq:"Gran angular"}},{"dimensiones.altura":{$lt:80}}] },{"modelo.nombre": {$regex:/^eos/i}} ] } )


