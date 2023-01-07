
import { useContext } from "react";
import { name } from "./NavBar";
const Child = () => {

     const nameee= useContext(name);
    return ( 

<h1 style={{fontFamily : "cursive" , color : "white"}}> {nameee}</h1>

     );
}
 
export default Child;         