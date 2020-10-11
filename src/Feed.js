import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="Feed">
      <MessageSender />

      {posts.map((post) => (
        <Post
          profilePic={post.profilePic}
          username={post.username}
          timestamp={post.timestamp}
          image={post.image}
          message={post.message}
        />
      ))}
    </div>
  );
}

export default Feed;
