import {   useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../CSSS/Signinform.css'
import { addCustomer } from '../Service/api';

function Signinform() {

//  const [email , setEmail] = useState("");
//  const [password , setPassword]=useState("");

  // const navigate  = useNavigate();
  // const inputt = useRef(null);
  // const inputt2 = useRef(null);

  // const onclick = () =>{

//     console.log(inputt.current);
//     console.log(inputt.current.type);
//     console.log(inputt.current.value);
//     console.log(inputt2.current.type);
   
//     console.log(inputt2.current.value);
//     if (!inputt.current.value &&  !inputt2.current.value){
      
// return window.confirm("please fill the form");
//     }
//     else if(inputt.current.value ==="ali@gmail.com" &&  inputt2.current.value ==="123"){
//       navigate('/menu');
//         }
    
//   }




const [CustomerData , setCustomerData] = useState({
  customerEmail : "",
  customerPassword :""
})
// array destructuring
//const {customerEmail , customerPassword} = CustomerData;

const handleChange  = (e) =>{
  setCustomerData({...CustomerData  , [e.target.name] : e.target.value })
}

const addDetails =  async(e) =>{
   await e.preventDefault();

  
addCustomer(CustomerData);

}









    return (  

      
        
      <div id="Signinform">

      
      <form >
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label "><b>Email Address</b> </label>
            <input placeholder='Email'   
             name='customerEmail'
             onChange={ (e) => handleChange(e)}
             type="email" 
              class="form-control"
               id="exampleInputEmail1"
               aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-label"> We'll never share your email with anyone else.</div>
          </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"><b>Password</b></label>
            <input placeholder='Password'
            
               type="password"
                class="form-control" 
                 name='customerPassword'
                 onChange={ (e) => handleChange(e)}
                id="exampleInputPassword1"/>

              
          </div>
          <div class="mb-3 form-check">
           
          </div>
          <div id=''>

          <button type="submit" class="btn btn-dark" onClick={(e) => addDetails (e)}>SignIn</button>
          </div>
          <button type="submit" class="btn btn-dark" style={{marginLeft: "380px" , marginTop:"-65px"  , fontSize:".7vw"}}>Forget password</button>

          
     </form>

      


     </div>



    );
}

export default Signinform;