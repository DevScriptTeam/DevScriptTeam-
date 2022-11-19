let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let productos = require('../app/models/productos.schema');



router.route('/productos').get((req, res) => {
    productos.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/productos/:id').get((req, res) => {
    productos.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;