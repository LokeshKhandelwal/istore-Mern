import { Avatar, Button, Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import React from "react";
import "./aboutSection.css";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/lokesh_khandelwal_";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "12vmax", height: "12vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dlm45wybk/image/upload/v1714173888/WhatsApp_Image_2024-04-27_at_04.54.16_a2npal.jpg"
              alt="Founder" 
            />
            <Typography>Lokesh Khandelwal</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @lokesh1911e. Only with the
              purpose to showcase Full Stack development skills.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Feel free to Collab</Typography>
            <a
              href="https://www.linkedin.com/in/lokesh1911e/"
              target="blank"
            >
              <LinkedIn className="LinkedInSvgIcon" />
            </a>

            <a href="https://www.instagram.com/lokesh_khandelwal_/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
