import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/footer.css";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="/tashkentcity">| Toshkent shahri |</Link>
        <Link to="/tashkentreg">Toshkent viloyati |</Link>
        <Link to="/andijan">Andijon |</Link>
        <Link to="/fergana">Farg'ona |</Link>
        <Link to="/namangan">Namangan |</Link>
        <Link to="/sirdaryo">Sirdaryo |</Link>
        <Link to="/jizzakh">Jizzah |</Link>
        <Link to="/samarkand">Samarkand |</Link>
        <Link to="/kashkadaryo">Qashqadaryo |</Link>
        <Link to="/surkhandaryo">Surkhandarya |</Link>
        <Link to="/navoi">Navoi |</Link>
        <Link to="/bukhoro">Buxoro |</Link>
        <Link to="/khorazm">Xorazm |</Link>
        <Link to="/karakalpakistan">Qoraqalpog'iston |</Link>
      </div>
      <p>&copy; 2021 website_name./uz/ru/com</p>
    </div>
  );
}

export default footer;
