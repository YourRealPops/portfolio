import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageContentHeader from "../../components/pageContentHeader";


const Portfolio=()=>{
    return(
        <section id="portfolio" className="portfolio">
          
          <PageContentHeader 
             headerText="My Portfolio"
             icon= {<BsInfoCircleFill size={40}/>}
          />

       </section>
    )
}

export default Portfolio;