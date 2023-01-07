

import { Link } from 'react-router-dom';
import '../CSSS/NavBar.css';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

import {createContext , useState} from "react";
import Child from "./Child"; 
const name = createContext();

function NavBar() {

  const [namee , setName] = useState("mudasssir");

  return (
<nav>



<Link to={'/'}  style={{textDecoration:'none' , marginLeft:"10vw"}}>
<div className='logo' ><img src="./Logoimg/Logo.png" style={{height:"90px",width:"10vw"}}/></div>
</Link>

<div>
       
       < name.Provider value = {namee}>
       
    <Child />

    </name.Provider>

    </div>


<ul>
 <Link to = "/viewcustomers">
<li>  <button className="btn btn-dark" type="button">viewcustomers</button></li>
</Link> 

<Link to = "/Admin">
<li>  <button className="btn btn-dark" type="button">AddMenuItem</button></li>
</Link>


  <Link to= "/Menu">
  
  <li>  <button className="btn btn-dark" type="button">Menu</button></li>
  </Link>
   {/* <Link to ="/SpecialDeals">
  
  <li>  <button className="btn btn-dark" type="button">Special Deals</button> </li>
  </Link>  */}
  <Link to= "/ContuctUs">
  <li>  <button className="btn btn-dark" type="button">Contuct Us</button></li>
  </Link>
  <Link to="/Signinform">
  <li> <button className="btn btn-dark" type="button">SignIn</button></li>
  </Link>

  <Link to="/signup">
  <li>  <button className="btn btn-dark" type="button">SignUp</button></li>
  </Link>

  <Link to="/signup">

    <li>
  <Badge color="primary"  badgeContent={""} >
          <ShoppingCartIcon style = {{fontSize : "40px" , color : "white"}}/>
        </Badge>
        </li>
  </Link>
 
  
  

</ul>

</nav>




//   <div id='navbar'>
// <nav className="navbar navbar-default navbar-fixed-top">
  
      
   
   
    

//     <div className="d-flex gap-5 d-md-flex justify-content-md-start" id='btn-div'>
//     < img  src='foodplanet.png' alt='' style={{height : "7vh", width : "8vw" , borderRadius : "10px"}}/>
//     <h5 style={{color : "red"}}>Food planet</h5>

  
    
    
//     <h5 style={{color : "red"}}>Already have an account ?</h5>
    
    
//     <h5 style={{color : "red"}}>Already have an account ?</h5>
//     <button className="btn btn-dark " type="button" id='sigin'>SignIn</button>
//     <button className="btn btn-dark" type="button">SignUp</button>
    
//     </div>
   
// </nav>

 // </div>
  );
}

export default NavBar;
export {name}