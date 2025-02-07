import React from "react";
import styled from "styled-components";
import { useState } from "react";
// import { CommunityHeader } from "./Communitypage.style";
import PostListContainer from "../components/CommunityPage/PostListContainer";
import PostFeedContainer from "../components/CommunityPage/PostFeedContainer";
import { CiGrid2H, CiMenuBurger } from "react-icons/ci";

const Community = () => {
  const PageContainer = styled.div`
    width: 100%;
    background-color: #f9f9f9;
    padding: 20px;
  `;

  const [listView, setListView] = useState(true);

  return (
    <div className="page-container">
      <div className="community-header">
        <ul>
          <li
            className={listView ? "active view" : "view"}
            onClick={() => setListView(true)}
          >
            <CiMenuBurger />
          </li>
          <li
            className={!listView ? "active view" : "view"}
            onClick={() => setListView(false)}
          >
            <CiGrid2H />
          </li>
        </ul>
      </div>
      {/* <PostListContainer /> */}
      {listView ? <PostListContainer /> : <PostFeedContainer />}
    </div>
  );
};

export default Community;
