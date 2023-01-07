import { useEffect, useState } from "react";

import { getCustomerinfo } from "../Service/Customerinfoapi";
const ViewCustomers = () => {


    const [customerinfo , setCustomerInfo] = useState([]);

    useEffect(() =>{

        getCustomerinformation();
    } , [])


    const getCustomerinformation = async () =>{
        const result =await  getCustomerinfo();
        setCustomerInfo(result.data);
    }
    return (  


        <div style={{marginTop : "15vh" , backgroundColor : "white"}}>

<table class="table">
  <thead>
    <tr>
      <th scope="col">firstname</th>
      <th scope="col">lastname</th>
      <th scope="col">email</th>
      <th scope="col">phonenum</th>
      <th scope="col">adress</th>
      <th scope="col">city</th>
      <th scope="col">delete</th>
      
    </tr>
  </thead>
  <tbody>
   {
    customerinfo.map( (info) =>(
        <tr>
            <td> {info.firstname}</td>
            <td> {info.lastname}</td>
            <td> {info.email}</td>
            <td> {info.cell}</td>
            <td> {info.adress}</td>
            <td> {info.city}</td>
            <td> <button className="btn btn-primary">delete </button></td>
        </tr>
    ))
   }
    
  </tbody>
</table>
        </div>
    );
}
 
export default ViewCustomers;