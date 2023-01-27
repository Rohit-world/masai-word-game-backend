const mongoose = require("mongoose");
const UserScema = mongoose.Schema({
 name:String,
 difficulty_level:String,
 score:String,
 
});
const UserModel = mongoose.model("users", UserScema);
module.exports = { UserModel};
