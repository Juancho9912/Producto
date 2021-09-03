/** packages */
const mongoose = require("mongoose"); //Leer el paquete mongoosee
const validator = require("mongoose-unique-validator");

/**  Schema creation */
const productSchema = new mongoose.Schema({
    codigo:{
        type: "String",
        required: true,
        unique: true
    },
    nombre:{
        type:"String",
        required:true
    },
    color:{
        type: "String",
        required: true,
    },
    peso: {
        type:"String",
        required: true
    },
    precio:{
        type:"String",
        required:true
    }
});

/** Schema exportation */
productSchema.plugin(validator);
module.exports = productSchema;