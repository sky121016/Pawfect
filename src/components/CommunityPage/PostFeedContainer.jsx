import React from "react";
import PostFeed from "./PostFeed";
import { PostData } from "./PostDummy";


const PostFeedContainer = () => {


  return (
    <>
      {PostData.map((post) => (
        <PostFeed
          key={post.id}
          username={post.username}
          title={post.title}
          date={post.date}
          content={post.content}
          likes={post.likes}
          comment={post.comment}
          image={post.image}
        />
      ))}
    </>
  );
};

export default PostFeedContainer;
