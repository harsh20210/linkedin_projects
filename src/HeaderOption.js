import React from "react";
import "./HeaderOption.css";
import Avatar from "@mui/material/Avatar";
import { LogOut } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import baseurl from "./Axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function HeaderOption({ avatr, Icons, title }) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [displayHidden, setdisplayHidden] = React.useState("none");

  const value = useSelector((state) => state);

  const handleLogoutFunction = () => {
    baseurl
      .post(`http://localhost:5001/api/logout`, {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(LogOut());
          history("/");
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          autoClose: 5000,
        });
      });
  };

  return (
    <>
      {" "}
      <ToastContainer />
      <div className="headerOption">
        {avatr && (
          <div className="AvtarMainDiv" 
          onMouseEnter={() => setdisplayHidden("block")}
          onMouseLeave={() => setdisplayHidden("none")}
          >
            <div className="avtar" style={{display: displayHidden}}>
              <span className="spanTag" onClick={handleLogoutFunction}>
                Logout
              </span>
            </div>
            <Avatar className="headerOption_icons" src={value.url} />
          </div>
        )}
        {Icons && <Icons className="headerOption_icons" />}
        <h3 className="headerOption_title" 
         onMouseEnter={() => setdisplayHidden("block")}
         onMouseLeave={() => setdisplayHidden("none")}
        >{title}</h3>
      </div>
    </>
  );
}
//harsh
