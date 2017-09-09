const conexion = require('./conexion');
class PublicacionesModel{
    getAll(cb){
        conexion.query('SELECT * FROM publicaciones ORDER BY id DESC', cb);
    }

    save(data, cb){
        conexion.query('INSERT INTO publicaciones SET ?', data, cb);
    }
}

module.exports = new PublicacionesModel();