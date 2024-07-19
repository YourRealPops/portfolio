import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageContentHeader from "../../components/pageContentHeader";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
const About = () => {
  const jobSummary =
    "Seasoned and independent Front End Developer with 5 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume. As a Front End Developer you will be judged by your ability to use UX and UI concepts and follow design guidelines. In short: expressing your attention to detail and how you can help implement design ideas for your future employer.";
  const personalDetails = [
    {
      label: "Name: ",
      value: "Fehinti",
    },
    {
      label: "Age: ",
      value: "26",
    },
    {
      label: "Address: ",
      value: "Nigeria",
    },
    {
      label: "Email Address: ",
      value: "adekoyafehinti@gmail.com",
    },
    {
      label: "Contact No: ",
      value: "+234 8145903585",
    },
  ];

  return (
    <section id="about" className="about">
      <PageContentHeader
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Frontend Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalInfoHeadText">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-th-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-th-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-th-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-th-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
