import React from "react";
import { stackList } from "../../data/ProjectData";

import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">

          <div className="AboutBio" >

            <ScrollAnimation animateIn="fadeInLeft">

              Born and raised in Chennai, India, I have always been fascinated by the world of technology and programming. From an early age, I found myself drawn to the power of code to create and solve problems. My journey began with writing actionscript-based games and dabbling in web development during my school days. This passion led me to pursue a Bachelor of Technology degree in Computer Science from SRM University, Chennai, where I honed my technical skills and gained a deep understanding of software engineering principles.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Driven by a desire to expand my horizons, I ventured to Germany to pursue a Master's degree in Distributed Software Systems from TU Darmstadt in 2015. This experience exposed me to a diverse range of perspectives and approaches to software development, further enriching my skillset and broadening my understanding of the industry.Over the years, I have had the privilege of working on a wide spectrum of projects, from enterprise-scale applications to startup initiatives. My technical expertise spans a variety of programming languages, including Java, JavaScript, and even Arduino. I consider myself a language agnostic engineer, capable of adapting to new technologies and frameworks with ease.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              My approach to software development is characterized by a strong focus on problem-solving and an unwavering commitment to delivering high-quality results. I have a knack for breaking down complex projects into manageable steps, ensuring that every aspect receives the attention it deserves. Additionally, I possess a keen eye for detail and a meticulous attention to quality, ensuring that the final product meets the highest standards.Beyond my technical skills, I bring a strong sense of product ideation and a collaborative spirit to every project. I believe in approaching technological challenges from multiple angles, carefully considering the user's needs and the overall business objectives. This holistic approach enables me to develop innovative and practical solutions that not only fulfill technical requirements but also align with the broader goals of the project.

            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft">
              I am an animal welfare enthusiast and dogs are a huge part of my life. What began as a minor curiosity has now transformed me into being a dog trainer as well. I love putting my expertise in technology to use in helping dogs as well.
              Now back in India, I am eager to leverage my extensive experience and diverse skillset to contribute to the ever-evolving landscape of technology. I am passionate about creating meaningful software solutions that make a positive impact on the world around me.
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                These are some of the technologies that I can build your business or ideas with:
              </div>
            </ScrollAnimation>


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies><br /><br />

          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
