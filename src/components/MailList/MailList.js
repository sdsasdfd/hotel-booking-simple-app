import React from "react";
import "./MailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time, save money</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputcontainer">
        <input type="text" placeholder="your Email" />
        <button>Subcribe</button>
      </div>
    </div>
  );
};

export default MailList;
