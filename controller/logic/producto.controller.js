/** Dto */
const productDto = require("../../model/dto/producto.dto.js");
const config = require("config");


exports.createProduct = (req, res, next) =>{
    let pdt = {
        code: req.body.code,
        name: req.body.name,
        color: req.body.color,
        weigth: req.body.weigth,
        price: req.body.price
    };
    productDto.create(pdt,(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};
exports.updateProduct = (req, res, next) =>{
    let pdt = {
        code: req.body.code,
        name: req.body.name,
        color: req.body.color,
        weigth: req.body.weigth,
        price: req.body.price
    };
    productDto.update({_id: req.body.id},pdt,(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    
    });
};

exports.getAll = (req, res, next) =>{

    productDto.getAll({},(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {info: data}
        );
    
    });
};
exports.getByCode = (req, res, next) =>{
    productDto.getByCode({code: req.params.code},(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    
    });
};

exports.deleteProduct = (req, res, next) => {
    productDto.delete({_id: req.body.id},(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json(
            {
                info: data
            }
        );
    
    });

}