import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageContentHeader from "../../components/pageContentHeader";

const Contact=()=>{
    return(
        <section id="contact" className="contact">
          
          <PageContentHeader 
             headerText="Contact Me"
             icon= {<BsInfoCircleFill size={40}/>}
          />

       </section>
    )
}

export default Contact;