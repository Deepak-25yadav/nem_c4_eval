

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true},
    password:{type:String,required:true},
    city:{type:String,required:true},
    age:{type:String,required:true},
    is_marries:{type:String,required:true}
},{
    versionKey:false
})

const UserModel = mongoose.model("user",UserSchema);

module.exports = {
    UserModel
}














// name ==> String
// email ==> String
// gender ==> String
// password ==> String
// age ==> Number
// city ==> String
// is_married ==> boolean