/* Empezamos usando el comando db."collection".deleteMany() para borrar todos los documentos dentro de 
la colección, por si después realizamos cambios en ella para que nos borre los datos desactualizados y nos
introduzca los cambios que hagamos */
db.camaras.deleteMany()
/* Ahora comenzamos a introudicr datos a nuestra colección que se llama "camaras" sobre las cámaras
de las que vamos a consultar información concreta después */
db.camaras.insertMany(
    [
    {  
        modelo:{nombre:"Alpha 7 III",marca:"Sony",megapixeles:26.2,estabilizador:true},
        objetivo:"Gran angular",
        conexion:{bluetooth:true,wifi:false},
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC","SDXC"],
        calidad:1000,
        dimensiones:{altura:73.7,ancho:127.9,peso:"650g"},
        cyp:[{color:"negro",precio:1000},{color:"blanco",precio:1020},{color:"gris",precio:1010}],
        fecha:{fabricacion:new Date("2020-07-24"),venta:new Date("2020-10-15")}
    }
]
)