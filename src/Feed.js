import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { PostData } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Button from '@mui/material/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Feed() {
  const [input, setInput] = useState("");
  const [imagePost, setImagePost] = useState("");
  const [triggerModel, setTriggerModel] = useState(false);
  const displatch = useDispatch();
  const values = useSelector((state) => state);


  const sendPost = (e) => {
    e.preventDefault();
    let data = {
      description:input ,
      imageUrl:imagePost,
    }
    // displatch(PostData(input));
    displatch(PostData(data));
    setInput("");
    setImagePost("");
  };

  const handleImageIconButton = () => {
    setTriggerModel(!triggerModel);
  };

  const handleFileUpload = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      if( reader.readyState === 2 ){
        setImagePost(reader.result)
      }
    }
  } 

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
          
        </div>
        { imagePost ?  (<div style={{color:"green"}}> You have Sucessfully Uploaded The Image </div>) : (<div style={{color:"red"}}>You can Upload Image By clicking In Image Icons</div>) }
        <div className="feed_inputOption">
          <InputOption
            Icons={ImageIcon}
            title="Image"
            color = {imagePost ? "#1976d2" : "#70B5F9" }
            // color="#70B5F9"
            handleImageIconClickEvent={handleImageIconButton}
          />
          <InputOption
            Icons={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOption Icons={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icons={CalendarViewDayIcon}
            title="Write an Artical"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {values.post.map((v, index) => {
          return (
            <Post key={index} name="harsh" description="text" message={v.description} image={v.imageUrl} />
          );
        })} 
      </FlipMove>

      {/*...........Post..................*/}
      {/* <Post name="harsh" description="text" message="testing" /> */}

      <div>
        <Dialog
          open={triggerModel}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setTriggerModel(!triggerModel)}
          aria-describedby="alert-dialog-slide-description"
        >
          <div className="Dialog">
            <div className="Dialog_button">
              <input type="file"  onChange={handleFileUpload} values={imagePost} accept="image/*" /> 
                <Button  variant="contained" onClick={() => setTriggerModel(false) }>Upload</Button>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
