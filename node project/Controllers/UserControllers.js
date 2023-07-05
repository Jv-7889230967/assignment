const asyncHandler=require("express-async-handler");
const User=require("../Schema/Usermodel");
const Match=require("../Schema/Usermodel");
const Registeruser = asyncHandler(async (req, res) => {//SIgnup API
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    
  });

  if (user) {
    console.log("registration successfull")
    res.status(201);
  }
   else {
    res.status(400);
    throw new Error("User not found");
  }
});

const Login = asyncHandler(async (req, res) => {//Login API
  const { email, password } = req.body;
  if(!email || !password)
  {
    res.status(400);
    throw new Error("please fill all required fields");
  }

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    // Password matches
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    // Password doesn't match or user not found
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});


module.exports={Registeruser,Login};