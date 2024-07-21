import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageContentHeader from "../../components/pageContentHeader";
import { skillsData } from "./skillsdata";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import './styles.scss'

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageContentHeader
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
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
              <h3 className="skills__content-wrapper__inner-content__text-category">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progress-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentange}
                        strokeWidth="2"
                        strokeColor="var(--yellow-th-main-color)"
                        trailWidth={"2"}
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
