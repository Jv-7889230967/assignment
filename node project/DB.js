const mongoose=require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://jv7889230967:jatinverma@cluster0.ktl2k9v.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
 
    });

    console.log('DB connected');
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;