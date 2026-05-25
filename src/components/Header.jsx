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
          I am a passionate Full Stack Developer with 3 years of experience in
          building responsive and modern web applications using React.js,
          Next.js, JavaScript, Node.js, and Express.js. I specialize in creating
          fast, user-friendly, and scalable applications with clean and
          maintainable code. My expertise includes frontend development, API
          integration, SQL database management, and responsive web design to
          ensure seamless user experiences across all devices. I also have
          experience deploying and managing applications using platforms like
          Vercel, Hostinger, and GoDaddy. I am committed to delivering
          high-quality work, professional communication, and client
          satisfaction. Passionate about continuous learning and
          problem-solving, I aim to build efficient and impactful web solutions
          tailored to client needs.
        </p>
      </div>
    </div>
  );
};

export default Header;
