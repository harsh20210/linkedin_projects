import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Login from "./Login";
import { useSelector } from "react-redux";
import Widget from "./Widget";

function App() {
  const state = useSelector((state) => state);

  return (
    <div className="app">
      {console.log(typeof(state.name))}

      <Header />

      {state.name !== null && state.name !== ""  ? (
        <div className="app_body">
          <SideBar />
          <Feed />
          <Widget/>
        </div>
      ) : (
        <Login />
      )}

      {/*  <Header />                    //Previous Code   
      <div className="app_body">
        <SideBar />
        <Feed />

      </div>

     <Login /> */}
    </div>
  );
}

export default App;
