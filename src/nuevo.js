/* Consultas Nuevas */

/* Para buscar la fecha de fabricación de mayor a menor en una lista */
db.camaras.find().sort({"fecha.fabricacion": -1}).limit(1) /* .limit(1) Nos muestra solo el primer documento de la lista */
/* Para buscar la fecha de fabricación de menor a mayor en una lista */
db.camaras.find().sort({"fecha.fabricacion": -1}).limit()  /* .limit() Nos muestra todos los documentos de la lista */
/* Para buscar los nombres de los modelos por orden alfabetico y numérico de mayor a menor si tienen números*/
db.camaras.find().sort({"modelo.nombre": 1}).limit(4) /* .limit(4) Nos muestra solo 4 documentos de la lista */

/* Para agregar un nuevo campo con un valor a todos los documentos de la colección */
db.camaras.aggregate( [{ $set: { "odc.unidades": 3 }}] )
/* Para quitar un campo a todos los documentos de la colección */
db.camaras.aggregate( [{$unset:"odc.unidades"}] )