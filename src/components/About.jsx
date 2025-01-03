import React from "react";
import AboutStats from "../Settings/AboutStats";
import Settings from "../Settings/Settings";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about container">
      <h1>About Me</h1>
      <div className="profile">
        <img src={Settings.profile_photo} alt="profile_photo" />
        <div className="info">
          <p> Name : {Settings.name}</p>
          <p> Age : {Settings.Age}</p>
          <p> DOB : {Settings.Birthday}</p>
          <p> Place : {Settings.Place}</p>
          <p> Degree : {Settings.Degree}</p>
          <p> Mobile : {Settings.Phone}</p>
          <p>
            Email : <a href={`mailto:${Settings.Email}`}>{Settings.Email}</a>
          </p>
          <p> Hobbies : {Settings.Hobbies}</p>
        </div>
      </div>
      
      <div className="stats">
        {AboutStats.map((item, index) => (
          <div className="card" key={index}>
            <i>{item.icon} </i>
            <h3>{item.title}</h3>
            <p> {item.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
