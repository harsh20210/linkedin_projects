import React, { forwardRef, useState } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import InputOption from "./InputOption";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = forwardRef(
  ({ name, description, message, image, id, handleDelete, avatar }, ref) => {
    const [colorForLikeButton, setColorForLikeButton] = useState(false);
    const values = useSelector((state) => state);
    const [triggerForDeleteIcons, setTriggerForDeleteIcons] = useState(false);

    const handleClickForLike = () => {
      setColorForLikeButton(!colorForLikeButton);
    };

    return (
      <div ref={ref} className="post">
        <div className="postleader">
          <Avatar src={avatar} />
          <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>

          {localStorage.getItem("name") === name && (
            <div className="MoreVertIcon">
              <MoreVertIcon
                onClick={() => setTriggerForDeleteIcons(!triggerForDeleteIcons)}
              />
              <div
                onClick={() => handleDelete(id)}
                style={{ display: triggerForDeleteIcons ? "block" : "none" }}
                className="MoreVertical-delete"
              >
                Delete Post
              </div>
            </div>
          )}
        </div>

        <div className="postBody">
          <p>{message}</p>
        </div>

        <div className="imageForDisplay">
          {image && <img src={image} width="100%" />}
        </div>

        <div className="post_button">
          <InputOption
            Icons={colorForLikeButton ? ThumbDownAltIcon : ThumbUpIcon}
            title="Like"
            color={colorForLikeButton ? "black" : "#0a66c2"}
            handleClick={handleClickForLike}
          />
          <InputOption Icons={CommentIcon} title="comment" color="gray" />
          <InputOption Icons={ShareIcon} title="share" color="gray" />
          {/* <InputOption Icons={SendIcon} title="send" color="gray" />  */}
        </div>
      </div>
    );
  }
);

export default Post;
