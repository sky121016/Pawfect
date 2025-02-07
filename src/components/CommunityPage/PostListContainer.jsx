import React from "react";
import PostList from "./PostList";
import { PostData } from "./PostDummy";

const PostListContainer = () => {
  return (
    <>
      {PostData.map((post) => (
        <PostList
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

export default PostListContainer;
