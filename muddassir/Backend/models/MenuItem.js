import mongoose from "mongoose";


const MenuItem = mongoose.Schema({
    catogory : String,
    id : String,
    name : String,
    price : Number,
    image : String,
    
});
const MenuItemmodel = new mongoose.model('MenuItem' ,  MenuItem);
export default   MenuItemmodel ;