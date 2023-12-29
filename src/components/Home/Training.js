import React, { useState } from "react";
import "./training.css";
import TrainerList from "./TrainerList";

const Training = () => {
  const TrainerData = [
    {
      id: 1,
      name: "강지우",
      rating: 5,
      tag: ["산책", "독스포츠", "어질리티"],
      date: "2022-08-09",
      review: 53,
    },
    {
      id: 2,
      name: "김지연",
      rating: 4,
      tag: ["산책", "플라이볼", "프리스비"],
      date: "2020-12-10",
      review: 62,
    },
    {
      id: 3,
      name: "정유현",
      rating: 5,
      tag: ["플라이볼", "프리스비", "어질리티"],
      date: "2017-03-11",
      review: 86,
    },
    {
      id: 4,
      name: "이주현",
      rating: 4,
      tag: ["산책", "어질리티"],
      date: "2022-11-22",
      review: 65,
    },
  ];

  return (
    <div id="training">
      <h1>1:1 훈련사 매칭</h1>
      <p>
        반려동물 다이어트 전문가와의 훈련으로 <br />
        보다 효과적인 다이어트 솔루션을 제공합니다.{" "}
      </p>

      <div className="trainer-container">
        <h2>
          <span>훈련사</span> 배정
        </h2>
        <TrainerList data = {TrainerData} />

      </div>
    </div>
  );
};

export default Training;
