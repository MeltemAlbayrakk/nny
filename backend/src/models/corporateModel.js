import mongoose from "mongoose";
const {Schema} = mongoose;

const CoporateSchema = new Schema({

    name:{type:String,required:true},
    surName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true},
    password:{type:String,required:true},
    companyName:{type:String,required:false}
});


const CorporateModel = mongoose.model("Corporate",CoporateSchema);
export default CorporateModel;