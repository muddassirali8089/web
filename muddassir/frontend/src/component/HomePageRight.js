import { useState } from "react";
import"../CSSS/homepageright.css"
const HomePageRight = () => {
    
    const[leftimg , setleftImg] = useState([

        {id : "1" ,image : "./homeimg/01.jpg"} ,
        {id : "2" ,image : "./homeimg/location.PNG"} 
        
    ]);
    
    return ( 
        
       <div id = "mainright">

        {
            leftimg.map((leftimg) =>(
                <div id=" cards"> 
                <div className="card-body">
         {/* <h5 className="card-title">{leftimg.id} </h5>  */}
       
      <div style={{margin: "10px"}}>
                <div className="card-image">
        <img src={leftimg.image} style={{width:"20rem" , height:"29rem"}}/>
</div>
        </div>
        </div>


                </div>

            ))
        }

       </div>
        
     );
}
 
export default HomePageRight;