import "../CSSS/Menu.css"
import {useState , createContext} from "react";
import Cartt from "./Cartt";
import { useEffect } from "react";

import { getMenuItem } from "../Service/MenuItemApi";
export const menuitem = createContext();

const Menu = () => {

  const [Menuiteminfo , setMenuiteminfo] = useState([]);


  useEffect(() =>{
    getMenuItemINformation();
    
} , [])

const getMenuItemINformation = async () =>{
  const result =await  getMenuItem();
  setMenuiteminfo (result.data);
}

 const [priceT,setT]=useState(0);

    const[piza , setPiza] = useState([

        {id : "1" ,count:0, Name : "Veggie Pizza" ,  price : 600 ,image : "./pizaimages/img1.jfif"} ,
        {id : "2" ,count:0, Name : "Cheese Pizza" ,   price : 550 ,image : "./pizaimages/img2.jfif"} ,
        {id : "3" ,count:0, Name : "Pepperoni Pizza" ,  price : 600 ,image : "./pizaimages/img3.jfif" } ,
        {id : "4" ,count:0, Name : "Meat Pizza" ,  price : 650 ,image : "./pizaimages/img4.jfif" } ,
        {id : "5" ,count:0, Name : "Margherita Pizza" , price : 700 , image : "./pizaimages/img5.jfif"} ,
        {id : "6" ,count:0, Name : "Chicken Pizza" , price : 600 , image : "./pizaimages/img6.jfif"} ,
        {id : "7" ,count:0, Name : "Hawaiian Pizza" , price : 650 , image : "/pizaimages/img7.jfif"},
        {id : "8" ,count:0, Name : "Buffalo Pizza" , price : 550 , image : "./pizaimages/img8.jfif" }
        
    ]);


    const increment = index => {
      let dataClone = [...piza ];
      dataClone[index].count = dataClone.at(index).count+1;
      setT(priceT+dataClone.at(index).price);
        
    
      setPiza(dataClone);
  }
     
  const decrement = index => {
    let dataClone = [...piza];
    
if( dataClone[index].count>0){
      dataClone[index].count = dataClone.at(index).count-1;
      setT(priceT-dataClone.at(index).price);
    setPiza(dataClone);

}
    
}

    const[burgers , setBurgers] = useState([

        {id : "1" ,count:0, Name : "meat burger " ,  price : 250 ,image : "./burgerimges/burger_0.jpg" } ,
        {id : "2" ,count:0, Name : "Cheeseburger" ,   price : 250 ,image : "./burgerimges/cheeseburger.jpg"} ,
        {id : "3" ,count:0, Name : "Bean burger" ,  price : 250 ,image : "./burgerimges/chickpea_burger.jpg"} ,
        {id : "4" ,count:0, Name : "Elk burger" ,  price : 300 ,image : "./burgerimges/elk.webp"} ,
        {id : "5" ,count:0, Name : "mushroom burger" , price : 350 , image : "./burgerimges/mushroom_burger.jpg"} ,
        {id : "6" ,count:0, Name : "salmon burger" , price : 350 , image : "./burgerimges/salmon_burger.jpg"} ,
        {id : "7" ,count:0, Name : "Turkey burger " , price : 650 , image : "./burgerimges/Turkey_burger.jpg"},
        {id : "8" ,count:0, Name : "Veggie burger" , price : 550 , image : "./burgerimges/vegie_burger.jpg"} 
       
    ]);



    const[milkshakes , setmilkshake] = useState([

        {id : "1" , count:0,Name : "Apple" ,  price : 150 ,image : "./milkshakeimg/apple.webp" },
        {id : "2" ,count:0, Name : "Bluebarry" ,   price : 150 ,image : "./milkshakeimg/banana.webp"} ,
        {id : "3" , count:0,Name : "Chocomalt" ,  price : 130 ,image : "./milkshakeimg/bluebary.webp"} ,
        {id : "4" , count:0,Name : "CoolMint" ,  price : 180 ,image : "./milkshakeimg/chocmalt.webp"} ,
        {id : "5" ,count:0, Name : "strabery" , price : 170 , image : "./milkshakeimg/cool_Mint.webp"} ,
        {id : "6" , count:0,Name : "vanila" , price : 150 , image : "./milkshakeimg/strabery.webp"} ,
        {id : "7" , count:0,Name : "Mango" , price : 120 , image : "./milkshakeimg/strabery.webp"},
        {id : "8" , count:0,Name : "Banana" , price : 140 , image : "./milkshakeimg/vanila.webp"} 
        
    ]);
   

    const del = (ID) =>{

setPiza(

  piza.filter((piza) => piza.id!==ID )
)

    }
    return ( 
<div>



  

<div id="main">

{priceT}

    
<div id="nav2">
            <h1>Pizza</h1>
        </div>
        <Cartt  arr = {piza}/>
        
        {
             Menuiteminfo.map((piza , index) => (
                
               
  
  
    <div className="card" id = "cards">
      <div className="card-body">
        <h5 className="card-title"> id : {piza.id} Name : {piza.name}</h5>
       <p> Price : {piza.price} </p>
      
        <img src = {piza.Image} />
        
        <div id="button">
        <button className="btn btn-dark" onClick={() => del (piza.id)}>Add to card</button>
        <button className="btn btn-dark" style={{marginLeft:"10px"}}  onClick={() => decrement(index)}>-</button>
        <p style={{paddingTop:"10px"}} >{piza.count }</p>
        <button className="btn btn-dark"   onClick={() => increment(index)}>+</button>
        
          </div>
      </div>
    </div>
 
 

              
                
             ))
          }
        

        </div>
       

         <div id="main">
        <div id="nav2">
            <h1>Burgers</h1>
        </div>
        {
             burgers.map((burger , index) => (
                
               
  
  
    <div className="card" id = "cards">
      <div className="card-body">
        <h5 className="card-title">{burger.id} {burger.Name}</h5>
       <p> {burger.price} </p>
      
        <img src={burger.image}/>
        <div id="button">
        <button className="btn btn-dark">AddTocard</button>
        <button className="btn btn-dark" style={{marginLeft:"10px"}}  onClick={() => decrement(index)}>-</button>
        <p style={{paddingTop:"10px"}}>{burger.count }</p>
        <button className="btn btn-dark"   onClick={() => increment(index)}>+</button>
       
        </div>
      </div>
    </div>                
             ))
          }
        
        </div>
       
        



        <div id="main">
        <div id="nav2">
            <h1>Milk shakes</h1>
        </div>
        {
             milkshakes.map((milkshake ,index) => (
                
               
  
  
    <div className="card" id = "cards">
      <div className="card-body">
        <h5 className="card-title">{milkshake.id} {milkshake.Name}</h5>
       <p> {milkshake.price} </p>
      
      <img src={milkshake.image}/>
        <div id="button">
        <button className="btn btn-dark" onClick={() => del (milkshake.id)}>Add to card</button>
        <button className="btn btn-dark" style={{marginLeft:"10px"}}  onClick={() => decrement(index)}>-</button>
        <p style={{paddingTop:"10px"}} >{milkshake.count }</p>
        <button className="btn btn-dark"   onClick={() => increment(index)}>+</button>
        
          </div>
      </div>
    </div>          
             ))
          }
        
        </div> 

        
        </div> 
        // main div 
     );
}

export default Menu;