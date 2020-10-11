import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import firebase from "firebase";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      image: imageUrl,
      username: user.displayName,
      profilePic: user.photoURL,
    });
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user?.photoURL} className="messageSender__avatar" />

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            placeholder="What's on your mind?"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            type="submit"
            disabled={!input}
          >
            Send Post
          </Button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__options">
          <div className="messageSender__option">
            <VideocamIcon style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>
          <div className="messageSender__option">
            <VideoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>
          <div className="messageSender__option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
