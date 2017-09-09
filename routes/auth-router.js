const   express = require('express'),
        router = express.Router(),
        PublicacionesController = require('../controllers/publicaciones');

        router
            .get('/', PublicacionesController.getIndex)
            .get('/default', PublicacionesController.getAll)
            .post('/publicar', PublicacionesController.publicar);

        module.exports = router;