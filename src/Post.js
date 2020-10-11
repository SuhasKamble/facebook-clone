import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Post({ profilePic, image, timestamp, message, username }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} />
        <div className="post__info">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          <h2 className="post__message">{message}</h2>
        </div>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__button">
        <div className="post__options">
          <div className="post__option">
            <ThumbUpIcon />
            <p>Like</p>
          </div>
          <div className="post__option">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className="post__option">
            <NearMeIcon />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
