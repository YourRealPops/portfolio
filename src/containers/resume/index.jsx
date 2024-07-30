import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageContentHeader from "../../components/pageContentHeader";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./resumeData";
import 'react-vertical-timeline-component/style.min.css'
import './styles.scss'
import { MdWork } from "react-icons/md";

const Resume=()=>{
    return(
        <section id="resume" className="resume">
          
          <PageContentHeader 
             headerText="My Resume"
             icon= {<BsInfoCircleFill size={40}/>}
          />
         
         <div className="timeline">
            <div className="timeline__experience">
              <h3 className="timeline__experience__header">
                Experience
              </h3>
              <VerticalTimeline
              layout={'1-column'}
              lineColor="var(--yellow-th-main-color)"
              >
                {
                  data.experience.map((item, i)=>(
                    <VerticalTimelineElement
                    key={i}
                    className="timeline__experience__vertical-element"
                    contentStyle={{
                      background: 'none',
                      color: 'var(--yellow-th-sub-text-color)',
                      border: '1.5px solid var(--yellow-th-main-color)'
                    }}
                    date= "2024 - Present"
                    icon={<MdWork/>}
                    iconStyle={{
                      background: '#181818',
                      color: 'var(--yellow-th-main-color)',
                    }}
                    >
                        <div className="vertical-element-title-wrapper">
                          <h3 >
                            {item.title}
                          </h3>

                          <h4>
                            {item.subTitle}
                          </h4>
                        </div>
                          <p>{item.description}</p>
                    </VerticalTimelineElement>
                  ))
                }
              </VerticalTimeline>
            </div>
            <div className="timeline__education">
              <h3 className="timeline__experience__header">
                Education
              </h3>
              <VerticalTimeline
              layout={'1-column'}
              lineColor="var(--yellow-th-main-color)"
              >
              {
                  data.education.map((item, i)=>(
                    <VerticalTimelineElement
                    key={i}
                    className="timeline__experience__vertical-element"
                    contentStyle={{
                      background: 'none',
                      color: 'var(--yellow-th-sub-text-color)',
                      border: '1.5px solid var(--yellow-th-main-color)'
                    }}
                    date= "2024 - Present"
                    icon={<MdWork/>}
                    iconStyle={{
                      background: '#181818',
                      color: 'var(--yellow-th-main-color)',
                    }}
                    >
                        <div className="vertical-element-title-wrapper">
                          <h3>
                            {item.title}
                          </h3>

                          <h4>
                            {item.subTitle}
                          </h4>
                        </div>
                          <p>{item.description}</p>
                    </VerticalTimelineElement>
                  ))
                }
                </VerticalTimeline>
            </div>
         </div>
       </section>
    )
}

export default Resume;