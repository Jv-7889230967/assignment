const express=require('express');
const { Registeruser, Login } = require('../Controllers/UserControllers');
const Router=express.Router();


Router.route("/login").get(Login);
Router.route("/signup").post(Registeruser);

module.exports=Router;