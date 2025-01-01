import React from "react";
import Settings from "../Settings/Settings";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header container">
      <h1> {Settings.name} </h1>
      <p> {Settings.position} </p>
      <div className="body-container">
        <img src={Settings.profile_photo} alt="profile_pic" />
        <p className="header_para">
        {/* I am a dedicated and detail-oriented Full Stack Developer with 1 year of hands-on experience in designing, developing, and deploying web applications. Proficient in modern technologies like ReactJS, NextJS, and JavaScript, I specialize in creating dynamic, user-friendly interfaces. My backend expertise includes NodeJS and ExpressJS, along with strong SQL database management skills.
       
        I have a solid foundation in HTML, CSS, and responsive web design, ensuring seamless user experiences across devices. With practical knowledge of hosting platforms like Hostinger and GoDaddy, I am adept at deploying and maintaining websites.
        
         Passionate about problem-solving and delivering high-quality solutions, I excel in collaborative environments and take pride in building efficient, scalable, and robust applications that meet user needs. */}
         I am a dedicated Full Stack Developer with 1 year of experience in designing, developing, and deploying web applications. Proficient in ReactJS, NextJS, and JavaScript, I specialize in building dynamic, user-friendly interfaces that prioritize performance and usability. My backend expertise includes NodeJS, ExpressJS, and SQL database management, enabling me to develop secure, efficient server-side applications. Additionally, my skills in HTML, CSS, and responsive web design ensure seamless user experiences across all devices.

         I have hands-on experience with hosting platforms like Hostinger, GoDaddy, and Vercel, making me proficient in deploying, monitoring, and maintaining websites. Familiar with Git and agile workflows, I thrive in collaborative environments while maintaining code quality. Passionate about solving complex problems, I aim to deliver robust, scalable applications tailored to user needs. I am committed to continuous learning and creating innovative solutions that drive meaningful impact.
        </p>
      </div>
    </div>
  );
};

export default Header;
