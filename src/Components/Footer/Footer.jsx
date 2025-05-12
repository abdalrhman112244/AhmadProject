import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
<div className="footer1">
<h1>تواصل معنا</h1>
</div>
<div className="footer2">
<div className="column1">ارقام التواصل :658 604 936 963+</div>
      <div className="column2">
        
          <Link to="https://www.facebook.com/share/15dibEdFG7/" >
            <FaFacebook className="face" fontSize="30px" />
          </Link>
        
        
          <Link to="https://www.instagram.com/shamia_aleppo?igsh=MXR3YnUzOHBueDYxOA==">
          <FaInstagram fontSize="30px" className="insta" />
          </Link>
        
      
      </div>
      <div className="column3"><p>المكان :حلب_الشيخ نجار_الفئة الثانية</p></div>
</div>
    </div>
  );
};

export default Footer;
