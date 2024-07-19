import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageContentHeader from "../../components/pageContentHeader";


const Skills=()=>{
    return(
        <section id="skills" className="skills">
          
          <PageContentHeader 
             headerText="My Skills"
             icon= {<BsInfoCircleFill size={40}/>}
          />

       </section>
    )
}

export default Skills;