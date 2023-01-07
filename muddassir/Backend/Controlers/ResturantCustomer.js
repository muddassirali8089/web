 import customerModel from "../models/ResturantCustomer.js";
 
 export const getCustomerRecord = (req , res) => {
  
 
}

export const setCustomerRecord = async (req , res) => {

  const email = req.body.customerEmail;
  const password = req.body.customerPassword;

  const newCoustomer = new customerModel(
    {
      customerEmail :  email,
      customerPasword : password
    }
  );


  try {
    await newCoustomer.save();
    res.json(newCoustomer);
    
  } catch (error) {
    console.log("not saved");
    
  }

}