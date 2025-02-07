import React from "react";
import profile from "../../assets/icons/trainerImg.png";
import { CiHeart, CiMenuKebab, CiChat1 } from "react-icons/ci";
import './PostList.css'

const PostFeed = (props) => {
  return (
    <>
      <div className="post">
        <div className="feed-header">
          <div className="user-info">
            <img className="profile-image" src={profile} alt="img" />
            <div>
              <p className="username">{props.username}</p>
              <p className="date">{props.date}</p>
            </div>
          </div>
          <CiMenuKebab />
        </div>

        <div className="feed-contents">
          <h3 className="title">{props.title}</h3>
          <p className="text">{props.content}</p>

          <img className="feed-image" src={props.image}></img>
        </div>

        <div className="post-footer">
          <CiHeart />
          <span className="footer-count">{props.likes}</span>

          <CiChat1 />
          <span className="footer-count">{props.comment}</span>
        </div>
      </div>
    </>
  );
};

export default PostFeed;
