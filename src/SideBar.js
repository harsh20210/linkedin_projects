import React from "react";
import Avatar from "@mui/material/Avatar";
import "./SideBar.css";

export default function SideBar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="http://www.sdpmedia.co.uk/web/wp-content/uploads/programming-code.jpg"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Harsh</h2>
        <h4>harshkupadhyay1999@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">56,5600</p>
        </div>

        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">56,5600</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>recent</p>
        {recentItem("reactJs")}
        {recentItem("NodeJS")}
        {recentItem("C++")}
        {recentItem("NextJS")}
        {recentItem("Angular")}
        {recentItem("TypeScript")}
        {/**sddhasdhas */}
      </div>
    </div>
  );
}
