const express = require('express');
const path =  require('path');
const morgan = require('morgan');

const App = express();

//        //Importar rutas
//
const indexRoutes = require('./rutas.js');
//
//        //Configuración
//
App.set('port',process.env.PORT || 5000);
//
//        //middlewares
//
App.use(morgan('dev'));
App.use(express.json());
App.use(express.urlencoded({extended:false}));
//
        //Rutas
App.use('/', indexRoutes);

//        //proves
//
//        // Server starting
//
App.listen(App.get('port'),()=>{
   console.log("Escuchando por el puerto ",App.get('port'));
});
