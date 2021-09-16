import React from "react";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

function contact() {
  return (
    <div className="contact">
      <div className="leftSide">
        <div className="leftLeft">
          <Link to="">
            <PhoneIcon /> +998 (90) 123-45-67
          </Link>
          <Link to="">
            <TelegramIcon /> @telegram_nickname
          </Link>
          <Link to="">
            <MailIcon /> mail@mail.gmail/ru/com
          </Link>
        </div>
        <div className="leftRight">
          <Link to="">
            <FacebookIcon />
          </Link>
          <Link to="">
            <TwitterIcon />
          </Link>
          <Link to="">
            <InstagramIcon />
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name"> Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email"> Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message"> Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default contact;
