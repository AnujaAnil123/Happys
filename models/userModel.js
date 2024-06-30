const mongoose = require("mongoose");
const { type } = require("os");

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    image:{
        type:String
        
    },
    password:{
        type:String,
        required:true
    },
    is_Admin:{
        type:Number,
        required:true,
        default:0
    },
    is_varified:{
        type:Number,
        default:0
    }

})

module.exports = mongoose.model('User',userschema);