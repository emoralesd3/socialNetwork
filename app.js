'use strict';

const   express         = require('express'),
        pug             = require('pug'),
        bodyParser      = require('body-parser'),
        auth_router     = require('./routes/auth-router'),
        publicDir       = express.static(`${__dirname}/public`),
        viewDir         = `${__dirname}/views`,
        port = (process.env.PORT || 3000);

let app = express();

app
        .set('views', viewDir)
        .set('view engine', 'pug')
        .set('port', port)
        
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: false }))
        .use(publicDir)
        
        .use(auth_router);

app.listen(port, ()=>{
    console.log(`Iniciando el servidor en el puerto ${port}`);
});