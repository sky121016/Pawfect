import React, { useState } from "react";
import trainerImg from "../../assets/icons/trainerImg.png";
import star from "../../assets/icons/star.png";


const TrainerList = ({data}) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState("recommend");

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
    sortData(selectedSortBy);
  };

  // 데이터 정렬
  const sortData = (sortType) => {
    let sortedDataCopy = [...sortedData];
    if(sortType === "recommend"){
        sortedDataCopy = data;
    }else if (sortType === "rating") {
      sortedDataCopy = sortedDataCopy.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "date") {
      sortedDataCopy = sortedDataCopy.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    } else if (sortType === "reviews") {
      sortedDataCopy = sortedDataCopy.sort((a, b) => b.review - a.review);
    }
    setSortedData(sortedDataCopy);
  };


  // 별점 표시
  const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<img key={i} src={star} alt="별점" />);
    }

    return <div className="stars">{stars}</div>;
  };

  // 태그 표시
  const TrainerTag = ({ tag }) => {
    const tags = [];

    for (let i = 0; i < tag.length; i++) {
      tags.push(<li key={i}>#{tag[i]}</li>);
    }

    return <ul>{tags}</ul>;
  };

  const showRatingCheck = ()=>{
    let ratingCheckbox = document.getElementById("ratingCheck");
    if(ratingCheckbox.style.display === "block"){
        ratingCheckbox.style.display = "none";
    }else{
        ratingCheckbox.style.display = "block";
    }
  };


  return (
    <>
        <div className="filter">
            <ul>
                <li><a href="#training" onClick={showRatingCheck}>별점</a>
                    <div id="ratingCheck">
                            <ul>
                                <li><input type="checkbox" value={5} /> 5</li>
                                <li><input type="checkbox" value={4} /> 4</li>
                                <li><input type="checkbox" value={3} /> 3</li>
                                <li><input type="checkbox" value={2} /> 2</li>
                                <li><input type="checkbox" value={1} /> 1</li>
                            </ul>
                    </div>
                </li>
    
                <li><a href="#training">지역</a></li>

                <li>
                    <select
                    name="sortTrainer"
                    id="sortTrainer"
                    onChange={handleSortChange}
                    value={sortBy}
                    >
                    <option value="recommend">추천순</option>
                    <option value="rating">인기순</option>
                    <option value="date">최신순</option>
                    <option value="reviews">리뷰순</option>
                    </select>
                </li>
            </ul>
            
        </div>


        <ul className="trainer-list">
            {sortedData.map((trainer) => {
            return (
                <li className="trainer-card" key={trainer.id}>
                <div className="trainer-info">
                    <img src={trainerImg} alt="훈련사" />
                    <div className="trainer-title">
                    <h3 className="trainer-name">{trainer.name}</h3>
                    <StarRating rating={trainer.rating} />
                    <span className="review">({trainer.review})</span>
                    </div>
                </div>
                <div className="tag">
                    <TrainerTag tag={trainer.tag} />
                </div>
                </li>
            );
            })}

        </ul>
    </>
  );
};

export default TrainerList;
