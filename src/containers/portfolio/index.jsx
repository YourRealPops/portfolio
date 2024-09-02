import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageContentHeader from "../../components/pageContentHeader";
import ImageOne from '../../images/design-pf.png';
import ImageTwo from '../../images/elearning.png';
import ImageThree from '../../images/entertainment.png';
import ImageFour from '../../images/gallery.png';
import ImageFive from '../../images/todo.png';
import "./styles.scss";


const portfolioData = [
   {
      id : 2,
      name : "Design",
      image : ImageOne
   },
   {
      id : 3,
      name : "ELearning",
      image : ImageTwo
   },
   {
      id : 2,
      name : "Entertainment",
      image : ImageThree
   },
   {
      id : 3,
      name : "Gallery",
      image : ImageFour
   },
   {
      id : 2,
      name : "ToDo",
      image : ImageFive
   },
]

const filterData = [
   {
      filterId : 1,
      label : 'All'
   },
   {
      filterId : 2,
      label : 'Development'
   },
   {
      filterId : 3,
      label : 'Design'
   },
]


const Portfolio=()=>{

   // const [selectedFilter, setSelectedFilter] = useState(1);

    return(
        <section id="portfolio" className="portfolio">
          
          <PageContentHeader 
             headerText="My Portfolio"
             icon= {<BsInfoCircleFill size={40}/>}
          />

            <div className="portfolio__content">
            <ul className="portfolio__content__filter">
               {filterData.map((item) => (
                  <li 
                     key={item.filterId}
                     // className={selectedFilter === item.filterId ? 'active' : ''}
                     // onClick={() => setSelectedFilter(item.filterId)}
                  >
                     {item.label}
                  </li>
               ))}
            </ul>

               <div className="portfolio__content__">
                  {
                     portfolioData.map((item)=>(
                        <div className="portfolio__content__card__item" key={item.id}>
                           <div className="portfolio__content__card__item__img-wrapper">
                              <a>
                                 <img alt="dummy data" src={item.image}/>
                              </a>
                           </div>
                        </div>
                     ))
                  }
               </div>

          </div>

       </section>
    )
}

export default Portfolio;