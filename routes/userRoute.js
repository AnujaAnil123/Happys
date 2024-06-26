const express = require('express')
const user_route = express()
const bodyParser = require('body-parser')
user_route.set('view engine','ejs');
user_route.set('views','./views/users')

user_route.use(express.json());
user_route.use(express.urlencoded({ extended: true }));

const multer = require("multer")
const path=require("path")

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/userImages'))
    },
    filename:function(req,file,cb){
       const name = Date.now()+'-' + file.originalname;
       cb(null,name)
    }
})

const upload = multer({storage:storage})

const userController = require('../controllers/userController');

user_route.get('/signUp',userController.loadRegister);
user_route.get('/signIn',userController.loadSignIn);
user_route.get('/',userController.loadHome);
user_route.post('/signUp',userController.insertUser);



module.exports = user_route