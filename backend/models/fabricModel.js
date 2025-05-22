const mongoose = require('mongoose')

const fabricSchema = new mongoose.Schema({
    fabric_id: {type:String , required:true},
    fabric_name: {type:String ,  required: true},
    fabric_color: {type:String , required:true},
    fabric_pattern: {type:String , required:true},
    fabric_material: {type:String , required:true},
    fabric_category: {type:String , required: true},
    fabric_image: {data: Buffer , contentType: String}

});

module.exports = mongoose.model('Fabric', fabricSchema)