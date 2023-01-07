import mongoose from "mongoose";


const customerinfo = mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    cell : Number,
    adress : String,
    city : String
});
const customerinfomodel = new mongoose.model('CutstomerInfo' , customerinfo);
export default customerinfomodel;