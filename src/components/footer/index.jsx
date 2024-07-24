import React from 'react';
import './styles.scss';
import { Animate} from "react-simple-animate";


const Footer =() =>{
    return(
       <div className='footer-container'>
          
           <div className="footer-container__footer-text">
           <Animate
          play
          duration={1}
          delay={0.3}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
          >
            <h3>&copy; Fehinticodes 2024</h3>
            </Animate>
           </div>
           
       </div>
    );
}

export default Footer;