import HomePageLeft from "../component/HomePageLeft";
import "../CSSS/Grid.css";
import HomePageRight from "../component/HomePageRight";
import { useEffect } from "react";
import Footer from "./Footer";
import Carosel from "./Carosel";

const HomepageGrid = () => {


    return (  


        <div style={{overflow:"hidden"}}>


        <div id = "maindiv" className="row" >

            <section id = " left" className="col-6"  >
       
            <HomePageLeft /> 
       
        
            </section>

            <section id = "right" className="col-6">
            <HomePageRight />
            </section>
        </div>

<div id="carosel" className="row">
    <Carosel />
</div>

        <div id = "footer" className="row">
            <Footer />
        </div>


           
            </div>
       
       

    );
}
 
export default HomepageGrid;