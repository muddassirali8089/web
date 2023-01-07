import axios from "axios";


const url = "http://localhost:5000";

 export const addCustomerinfo =  async(customerinfo) =>{  
  return  await axios.post(`${url}/signup` , customerinfo);
 }
   
   export const getCustomerinfo = async () =>{
       return await axios.get( `${url}/viewcustomers`);
    }
