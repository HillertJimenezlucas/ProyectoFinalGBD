/* Empezamos usando el comando db."collection".drop() para borrar la colección y todos los documentos dentro de 
la colección, por si después realizamos cambios en ella para que nos borre los datos desactualizados y nos
introduzca los cambios que hagamos */
db.camaras.drop()
/* Ahora comenzamos a introudicr datos a nuestra colección que se llama "camaras" sobre las cámaras
de las que vamos a consultar información concreta después */
db.camaras.insertMany(
    [
    {   _id:1,
        modelo:{
            nombre:"Alpha 7 III",
            marca:"Sony",
            megapixeles:37.8,
            estabilizador:true
        },
        objetivo:"Gran angular",
        conexion:{
            bluetooth:true,
            wifi:true
        },
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC","SDXC"],
        fpsgrabacion:[120,60,30],
        dimensiones:{
            altura:80.7,
            ancho:145.9,
            peso:"885g"},
        odc:[
            {color:"negro",precio:3000},
            {color:"blanco",precio:3050},
            {color:"gris",precio:3100}
        ],
        fecha:{
            fabricacion:new Date("2021-09-10"),
            lanzamiento:new Date("2021-11-13")
        },
        garantia: 2
    },
    {   
        _id:2,
        modelo:{nombre:"EOS 200M",marca:"Canon",megapixeles:23.5,estabilizador:true},
        objetivo:"Ojo de pez",
        conexion:{bluetooth:false,wifi:false},
        memoriascompatibles:["MS Duo","SD"],
        fpsgrabacion:[30],
        dimensiones:{altura:75.6,ancho:127.9,peso:"450g"},
        odc:[{color:"negro",precio:600},{color:"rojo",precio:610},{color:"azul",precio:620}],
        fecha:{fabricacion:new Date("2021-02-23"),lanzamiento:new Date("2020-04-22")},
        garantia: 1
    },
    {  
        _id:3,
        modelo:{nombre:"Powershot",marca:"Canon",megapixeles:28.8,estabilizador:true},
        objetivo:"Teleobjetivo",
        conexion:{bluetooth:true,wifi:true},
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC"],
        fpsgrabacion:[60,30],
        dimensiones:{altura:82.7,ancho:133.5,peso:"820g"},
        odc:[{color:"negro",precio:1000},{color:"blanco",precio:1020}],
        fecha:{fabricacion:new Date("2021-05-16"),lanzamiento:new Date("2021-07-17")},
    },
    {  
        _id:4,
        modelo:{nombre:"DSC-HX60",marca:"Sony",megapixeles:20.5,estabilizador:false},
        objetivo:"Ojo de pez",
        conexion:{bluetooth:false,wifi:false},
        memoriascompatibles:["MS Duo","SD"],
        fpsgrabacion:[30],
        dimensiones:{altura:70.5,ancho:126.8,peso:"400g"},
        odc:[{color:"negro",precio:400},{color:"blanco",precio:405},{color:"azul",precio:410}],
        fecha:{fabricacion:new Date("2020-07-24"),lanzamiento:new Date("2020-10-15")},
        garantia: 3
    },
    {
        _id:5,
        modelo:{nombre:"Alpha 7 II",marca:"Sony",megapixeles:25.4,estabilizador:false},
        objetivo:"Gran angular",
        conexion:{bluetooth:true,wifi:false},
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD"],
        fpsgrabacion:[60,30],
        dimensiones:{altura:73.4,ancho:130.6,peso:"850g"},
        odc:[{color:"blanco",precio:810},{color:"rojo",precio:809}],
        fecha:{fabricacion:new Date("2020-09-24"),lanzamiento:new Date("2020-10-20")},
        garantia: 3
    },
    {  
        _id:6,
        modelo:{nombre:"DSC-HX70",marca:"Sony",megapixeles:21.3,estabilizador:false},
        objetivo:"Teleobjetivo",
        conexion:{bluetooth:true,wifi:false},
        memoriascompatibles:["MS Duo","SD","SDHC"],
        fpsgrabacion:[30],
        dimensiones:{altura:69.3,ancho:120.5,peso:"390g"},
        odc:[{color:"negro",precio:500},{color:"rojo",precio:505},{color:"blanco",precio:510}],
        fecha:{fabricacion:new Date("2020-07-24"),lanzamiento:new Date("2020-10-15")},
        garantia: 2
    },
    {  
        _id:7,
        modelo:{nombre:"D5500",marca:"Nikon",megapixeles:26.2,estabilizador:false},
        objetivo:"Normal",
        conexion:{bluetooth:true,wifi:true},
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD"],
        fpsgrabacion:[60,30],
        dimensiones:{altura:76.3,ancho:134.6,peso:"700g"},
        odc:[{color:"negro",precio:750},{color:"blanco",precio:760},{color:"naranja",precio:765}],
        fecha:{fabricacion:new Date("2020-01-26"),lanzamiento:new Date("2020-03-19")},
        garantia: 1
    },
    {  
        _id:8,
        modelo:{nombre:"D5600",marca:"Nikon",megapixeles:29.7,estabilizador:true},
        objetivo:"Normal",
        conexion:{bluetooth:true,wifi:true},
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC"],
        fpsgrabacion:[120,60,30],
        dimensiones:{altura:85.6,ancho:141.2,peso:"897g"},
        odc:[{color:"negro",precio:1100},{color:"blanco",precio:1105},{color:"azul",precio:1110}],
        fecha:{fabricacion:new Date("2020-09-22"),lanzamiento:new Date("2020-12-15")},
    },
    {  
        _id:9,
        modelo:{nombre:"D6000",marca:"Nikon",megapixeles:32.5,estabilizador:true},
        objetivo:"Teleobjetivo",
        conexion:{bluetooth:true,wifi:true},
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC","SDXC"],
        fpsgrabacion:[120,60,30],
        dimensiones:{altura:83.1,ancho:144.5,peso:"900g"},
        odc:[{color:"rojo",precio:2020},{color:"blanco",precio:2030}],
        fecha:{fabricacion:new Date("2021-01-27"),lanzamiento:new Date("2021-02-10")},
        garantia: 3
    },
    {  
        _id:10,
        modelo:{nombre:"EOS 400M",marca:"Canon",megapixeles:28.6,estabilizador:true},
        objetivo:"Gran angular",
        conexion:{bluetooth:true,wifi:true},
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC"],
        fpsgrabacion:[60,30],
        dimensiones:{altura:78.2,ancho:132.8,peso:"930g"},
        odc:[{color:"negro",precio:970},{color:"blanco",precio:975},{color:"rojo",precio:978}],
        fecha:{fabricacion:new Date("2021-09-22"),lanzamiento:new Date("2021-11-02")},
        garantia: 1
    },
    {  
        _id:11,
        modelo:{nombre:"E-M5",marca:"Olympus",megapixeles:34.3,estabilizador:true},
        objetivo:"Normal",
        conexion:{bluetooth:true,wifi:true},
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC","SDXC"],
        fpsgrabacion:[120,60,30],
        dimensiones:{altura:72.3,ancho:128.9,peso:"870g"},
        odc:[{color:"negro",precio:2700},{color:"azul",precio:2710},{color:"rojo",precio:2715}],
        fecha:{fabricacion:new Date("2021-03-28"),lanzamiento:new Date("2021-05-10")},
        garantia: 2
    },
    {  
        _id:12,
        modelo:{nombre:"E-M3",marca:"Olympus",megapixeles:22.8,estabilizador:false},
        objetivo:"Ojo de pez",
        conexion:{bluetooth:true,wifi:false},
        memoriascompatibles:["MS Duo","SD"],
        fpsgrabacion:[60,30],
        dimensiones:{altura:79.8,ancho:135.9,peso:"740g"},
        odc:[{color:"negro",precio:790},{color:"blanco",precio:795},{color:"azul",precio:800}],
        fecha:{fabricacion:new Date("2020-04-14"),lanzamiento:new Date("2020-06-21")},
        garantia: 2
    },
    {  
        _id:13,
        modelo:{nombre:"E-M4",marca:"Olympus",megapixeles:27.9,estabilizador:true},
        objetivo:"Ojo de pez",
        conexion:{bluetooth:true,wifi:true},
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD"],
        fpsgrabacion:[60,30],
        dimensiones:{altura:71.9,ancho:132.6,peso:"420g"},
        odc:[{color:"negro",precio:1200},{color:"blanco",precio:1220},{color:"gris",precio:1210}],
        fecha:{fabricacion:new Date("2021-07-24"),lanzamiento:new Date("2021-09-18")},
    },
    {  
        _id:14,
        modelo:{nombre:"D6100",marca:"Nikon",megapixeles:35.4,estabilizador:true},
        objetivo:"Gran angular",
        conexion:{bluetooth:true,wifi:true},
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC","SDXC"],
        fpsgrabacion:[120,60,30],
        dimensiones:{altura:83.4,ancho:137.9,peso:"950g"},
        odc:[{color:"negro",precio:2300},{color:"blanco",precio:2320},{color:"rojo",precio:2310}],
        fecha:{fabricacion:new Date("2021-03-20"),lanzamiento:new Date("2021-05-15")},
        garantia: 3
    },
    {  
        _id:15,
        modelo:{nombre:"EOS 500M",marca:"Canon",megapixeles:31.6,estabilizador:true},
        objetivo:"Normal",
        conexion:{bluetooth:true,wifi:true},
        memoriascompatibles:["MS Duo","MS Pro-HG Duo","SD","SDHC"],
        fpsgrabacion:[120,60,30],
        dimensiones:{altura:85.7,ancho:141.2,peso:"990g"},
        odc:[{color:"negro",precio:1950},{color:"blanco",precio:1954},{color:"naranja",precio:1959}],
        fecha:{fabricacion:new Date("2021-09-28"),lanzamiento:new Date("2021-12-12")},
        garantia: 2
    }
]
)