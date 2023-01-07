import axios from "axios";


const url = "http://localhost:5000";

 export const addCustomer =  async(CustomerData) =>{
  return  await axios.post(`${url}/Signinform` , CustomerData);
  
   
  
}
