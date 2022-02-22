import React, { useState , useEffect} from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./FireBase";
import firebase from 'firebase';

export default function Feed() {
  const [input , setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add(
        {
            name:'harsh',
            description:"this is a test",
            message:input,
            photoUrl:'',
            // timestamp: firebase.firestore.FieldValue.serverTimestamp
            //new 
        }
    )
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" onChange={e=> setInput(e.target.value)}  value={input}/>
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>

        <div className="feed_inputOption">
          <InputOption Icons={ImageIcon} title="Image" color="#70B5F9" />
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

      {/*...........Post..................*/}
      {posts.map((post) => {
        <Post />;
      })}
      <Post name="harsh" description="text" message="testing" />
    </div>
  );
}
