import React from "react";
import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Widget from "./Widget"
import Header from "./Header";

function FeedPage() {
 return (
    <>
    <Header />
    <div className="app_body">
          <SideBar />
          <Feed />
          <Widget/>
    </div>
    </>
 )
}

export default FeedPage;