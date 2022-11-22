import React from "react";
import "../App.css";
import {
    Routes,
    Route,
  } from "react-router-dom";
  import Login from "../Login";
  import FeedPage from "../FeedPage";


  function RouteHandler() {
    return (
        <div className="app">
        <Routes>
            <Route path='/' element={ <Login/> } />
            <Route path="/FeedPage" element={ <FeedPage/> } />
        </Routes>
        </div>
    )
  }

  export default RouteHandler;