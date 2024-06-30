const User = require('../models/userModel')

const loadRegister = async(req,res)=>{
    try {

        res.render("signUp")
    } catch (error) {
        console.log(error.message)
    }
}
const loadSignIn = async(req,res)=>{
    try {
        res.render("signIn")
    } catch (error) {
        console.log(error.message)
    }
}
const loadHome = async(req,res)=>{
    try {
        res.render("home")
    } catch (error) {
        console.log(error.message)
    }
}

const insertUser = async(req,res)=>{
    
    try {
        console.log("hii",req.body)

        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mno,
            is_Admin:0

        });
       const userData = await user.save();
if(userData){
    res.render('signUp',{message:"Your registration has been successfully."})
}else{
    res.render('signUp',{message:"Your registration has been failed."})
}

    } catch (error) {
       console.log(error.message) 
    }
}


module.exports = {
    loadRegister,
    loadSignIn,
    loadHome,
    insertUser,

}