import customerinfomodel from "../models/CustomerInfo.js";
export const getCustomerinfo = async(req , res) => {


  try {
    
     const customerinfo =   await customerinfomodel.find();
     res.json( customerinfo);
  } catch (error) {
    console.log("notfound any data");
  }
 
}

export const setCustomerInfo = async (req , res) =>{


    
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phonenum = req.body.phonenum;
  const adress = req.body.adress;
  const city = req.body.city;
 


  const newCoustomerinfo = customerinfomodel(
    {

      // column name must be same as model
      firstname : firstname,
      lastname : lastname,
      email : email,
      cell : phonenum,
      adress : adress,
      city : city

    }
  );
try {
    await newCoustomerinfo.save();
  res.json(newCoustomerinfo);
} catch (error) {
    console.log("not saved");
    
}
  
  

 


}