import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageContentHeader from "../../components/pageContentHeader";


const Resume=()=>{
    return(
        <section id="resume" className="resume">
          
          <PageContentHeader 
             headerText="My Resume"
             icon= {<BsInfoCircleFill size={40}/>}
          />
         
         <div className="timeline">
            
         </div>
       </section>
    )
}

export default Resume;