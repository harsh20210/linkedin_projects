import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { PostData , deletePost } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid";
import baseurl from './Axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Feed() {
  const [input, setInput] = useState("");
  const [imagePost, setImagePost] = useState("");
  const [triggerModel, setTriggerModel] = useState(false);
  const displatch = useDispatch();
  const values = useSelector((state) => state);

  console.log("State in redux ==>>>> " , values.name );

  console.log(values);
  const sendPost = (e) => {
    e.preventDefault();
    let data = {
      id:uuidv4(),
      description:input ,
      imageUrl:imagePost,
      name:values.name,
      urlAvatar:values.url
    }

    // displatch(PostData([data]));
    
    baseurl.post(`/api/Post` , data)
    .then(res => {
      if(res.data.status === true) {
        setInput("");
        setImagePost("");
        getData();
      }
    })
    .catch( err => console.log(err) )  
  };

  const getData = () => {
    baseurl.get(`/getApi/Post`).then( res => {
      displatch(PostData(res.data.data));
      })
      .catch( err => console.log(err));
  }

  useEffect( () => {
    getData();
  } ,[] )

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

  const handleDelete = (id) => {
    baseurl.get(`/api/delete/${id}`)
    .then(res => console.log("Deleted"))
    .catch(err => console.log("error"))
    displatch(deletePost(id))

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
        {values.post && values?.post?.map((v, index) => {
          if(v.id !== null) {
            return (
              <Post key={v.id} id={v.id} handleDelete={handleDelete} name={v?.name} description="Post" message={v.description} image={v.imageUrl} avatar={v.url} />
            );
          }
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
