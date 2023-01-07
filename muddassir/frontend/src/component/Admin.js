
import '../CSSS/RegistrationForm.css';
import {  useState } from 'react';
import{Addmenuitem} from "../Service/MenuItemApi";


function Admin() {

  const [menuitem , setMenuItem] = useState({

    category : "",
    id : "",
    name : "",
    price : "",
    Image :"",
    

  })
  // const { firstname,lastname, email,phonenum , adress , city} = customerinfo;

  const handleChange  = (e) =>{
    setMenuItem({...menuitem  , [e.target.name] : e.target.value })
  }


 


 
  const addInfo =  async(e) =>{
    await e.preventDefault();
 

    Addmenuitem(menuitem);
   
  
  }

    return (  
      
      <div id="RegistrationForm">

      
        
 <form >
   <div class="form-group col-md-6">
     <label for="formGroupExampleInput">Category</label>
     <input    onChange={(e) => handleChange(e)}  name = "category"  type="text" class="form-control" id="formGroupExampleInput" placeholder="Category" />
   </div>
   <div class="form-group col-md-6">
     <label for="formGroupExampleInput2">ID</label>
     <input  onChange = {(e) => handleChange(e)} name = "id" type="text" class="form-control" id="formGroupExampleInput2" placeholder="id"/>
   </div>
 
   <div class="form-row">
     <div class="form-group col-md-6">
       <label for="inputEmail4">Name</label>
       <input onChange={(e) => handleChange(e)} name = "name"  type="email" class="form-control" id="inputEmail4" placeholder="Name"/>
     </div>

     <div class="form-group col-md-6">
       <label for="phone">Price</label>
       <input  onChange={(e) => handleChange(e)} name = "price"  type="number" class="form-control" id="phone" placeholder="price"/>
     </div>
     <div class="form-group col-md-6">
       <label for="phone">Image</label>
       <input  onChange={(e) => handleChange(e)} name = "Image"  type="file" class="form-control" id="phone" placeholder="Image"/>
     </div>
   </div>
   
  
   <div class="form-row">
    
    {/* <div class="form-group col-md-4">
      <label for="inputState"> Select State</label>
      <select id="inputState" class="form-control">
        <option selected>KPK</option>
        
       <option >Punjab</option>
       <option >Sindh</option>
        <option >Baluchistan</option>
        
       </select>
   </div> */}
   <button type="submit" class="btn btn-dark  " id="btn" onClick={(e) => addInfo (e)} style={{marginLeft : "9vw"}}>Add item</button>
  
    </div>
 
    
 </form>

 </div> // maindiv

    );

  }
export default Admin;