import "./App.css";
import {
  BrowserRouter,
} from "react-router-dom";
import RouteHandler from "./Route/RouteHandler";

function App() {

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
