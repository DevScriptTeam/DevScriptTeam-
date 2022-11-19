const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;



let userSchema = new Schema({
        id: ObjectId,
        urlImagen:String,
        name:String,
        description:String,
        features:Array,
        price:Number,
        existencias:Number,
    },
    { timestamps: true })
    
    module.exports = mongoose.model('productos', userSchema)


      


