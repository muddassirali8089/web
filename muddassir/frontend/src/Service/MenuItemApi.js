import axios from "axios";


const url = "http://localhost:5000";

 export const Addmenuitem =  async(menuitem) =>{
  return  await axios.post(`${url}/Admin` , menuitem );
  
   
  
}

export const getMenuItem = async () =>{
  return await axios.get( `${url}/Menu`);
}