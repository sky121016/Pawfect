import React from "react";
import profile from "../../assets/icons/trainerImg.png";
import './PostList.css'

const PostList = (props) => {
  return (
    <div className="list">
      <div className="left-side">
        <div className="feed-header">
          <div className="user-info">
            <img className="profile-image" src={profile} alt="img" />
            <div>
              <p className="username">{props.username}</p>
              <p className="date">{props.date}</p>
            </div>
          </div>
        </div>

        <h3 className="title">{props.title}</h3>
        <p className="text">{props.content}</p>
      </div>
      <div className="right-side">
        <img className="list-image" src={props.image} />
      </div>
    </div>
  );
};

export default PostList;
