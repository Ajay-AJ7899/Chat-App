// import mongoose from "mongoose"
// import { getDefaultLibFilePath } from "typescript"
// const userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//     },
//     userName:
//     {
//         type: String,
//         required:true,
//         unique:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//         type:String,
//         required: true,
//     },
//     image:{
//         type:String,
//         default: ""
//     }
// },{timestamps:true})

// const User=mongoose.model("User",userSchema)
// export default userSchema

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: "" }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;   // ✅ export the model, not the schema