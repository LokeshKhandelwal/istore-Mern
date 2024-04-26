import { Button } from "@material-ui/core";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:lokesh1911e@gmail.com">
        <Button>Contact: lokesh1911e@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
