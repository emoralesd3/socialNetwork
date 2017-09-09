const PublicacionesModel = require('../models/publicaciones');

class PublicacionesController{
    getIndex(request, response, next){
        response.render('auth/login', {
            title: 'Inicio de sesión'
        });
    }

    getAll(req, res, next){
        PublicacionesModel.getAll((error, data) => {
            if(!error){
                res.render('news/default', {
                    data: data
                });
            }
        });
    }

    publicar(req, res, next){
        let data = {
            contenido : req.body.contenido_pub
        };

        PublicacionesModel.save(data, ()=>{
            res.redirect('/default');
        });
    }
}

module.exports = new PublicacionesController();