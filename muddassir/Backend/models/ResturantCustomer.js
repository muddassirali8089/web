import mongoose from "mongoose";
const ResuturantCustomerStructure = mongoose.Schema({

    customerEmail : String,
    customerPasword : String
});
 // collection name is customer Record
const customerModel = mongoose.model('CustomerRecord',  ResuturantCustomerStructure);
export default customerModel;