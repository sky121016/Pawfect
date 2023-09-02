import React from 'react'
import './post.css';
import profile from "../assets/icons/trainerImg.png";
import more from "../assets/icons/more.png";

const Post = (props) => {
  return (
      <>
          <div className="post">
              <div className="userInfo">
                  <div className="left-side">
                      <img className="profile-image" src={profile} alt="img" />
                      <div>
                          <p className="username">{props.username}</p>
                          <p className="date">{props.date}</p>
                      </div>
                  </div>
                  <img className="more" src={more} alt="img" />
              </div>
              <div className="post-content">
                  <h3>{props.title}</h3>
                  <p>{props.content}</p>

                  <div className="post-img">
                      <img src={props.image} alt="img" />
                  </div>
              </div>

              <div className="post-footer">
                  <div className="footer-like">
                      <svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                              d="M1.18347 7.04146L8 14L14.8165 7.04146C15.5743 6.26791 16 5.21875 16 4.12479C16 1.84673 14.191 0 11.9594 0C10.8878 0 9.86001 0.434574 9.10225 1.20812L8 2.33333L6.89775 1.20812C6.13999 0.434575 5.11225 0 4.04061 0C1.80904 0 0 1.84673 0 4.12479C0 5.21875 0.425704 6.26791 1.18347 7.04146Z"
                              fill="#FF9900"
                          />
                      </svg>
                      <span className="footer-count">{props.likes}</span>
                  </div>
                  <div className="footer-comment">
                      <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                              d="M15.9749 14.6886L13.9485 10.7022C14.3124 9.82574 14.5074 8.85876 14.49 7.84148C14.4283 4.15021 11.5312 1.11625 7.95621 1.00334C4.13425 0.882612 0.997835 4.04624 1 7.96557C1.00217 11.8849 3.90248 14.7936 7.51109 14.9211C9.02406 14.9747 10.4287 14.5119 11.5767 13.6925L15.7333 14.9904C15.9088 15.0452 16.0604 14.8551 15.9759 14.6874L15.9749 14.6886Z"
                              stroke="#6F6F6F"
                              stroke-width="0.927419"
                              stroke-miterlimit="10"
                          />
                      </svg>
                      <span className='footer-count'>{props.comment}</span>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Post