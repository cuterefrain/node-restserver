
const express=require('express');
const cors=require('cors');

class Servidor {
    //Creamos el constructor
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //Cualqueir informacion que venga va ser serializada a formato JSON
        this.app.use(express.json());
        //acceso al app y usar express, use es para middlewares, direcotrio publico
        this.app.use(express.static('public'));
    }
    //Crear el metodo routes donde estaran las rutas
    routes(){
      this.app.use('/api/usuarios',require('../routes/usuarios'));
    }

    //Crear el metodo donde el servidor esta escuhando el puerto

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor ejecutandose en el puerto',this.port)
        })
    }
}
module.exports=Servidor;