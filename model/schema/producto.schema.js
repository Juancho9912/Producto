/** packages */
const mongoose = require("mongoose"); //Leer el paquete mongoosee
const validator = require("mongoose-unique-validator");

/**  Schema creation */
const productSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type:"String",
        required:true
    },
    color:{
        type: "String",
        required: true,
    },
    weigth: {
        type:"String",
        required: true
    },
    price:{
        type:"String",
        required:true
    }
});

/** Schema exportation */
productSchema.plugin(validator);
module.exports = productSchema;