import "./App.css";
// import Header from "./Header";
// import SideBar from "./SideBar";
// import Feed from "./Feed";
// import Login from "./Login";
import { useSelector } from "react-redux";
// import Widget from "./Widget";
import {
  BrowserRouter,
} from "react-router-dom";
import RouteHandler from "./Route/RouteHandler";

function App() {
  const state = useSelector((state) => state);

  return (
    
    <BrowserRouter>
       <RouteHandler/>
    </BrowserRouter>

    // <div className="app">
    //   <Header />
    //   {state.name !== null && state.name !== ""  ? (
    //     <div className="app_body">
    //       <SideBar />
    //       <Feed />
    //       <Widget/>
    //     </div>
    //   ) : (
    //     <Login />
    //   )}
    // </div>
  );
}

export default App;
