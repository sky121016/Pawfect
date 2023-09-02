import React, { useState, useRef, useEffect } from "react";
import "./community.css";
import Add from "../assets/icons/Add.png";
import Post from "./Post";
import Send from "../assets/icons/send.png";
import postImg1 from "../assets/postImg1.png";
import postImg2 from "../assets/postImg2.png";
import postImg3 from "../assets/postImg3.png";



const Community = () => {
    const [tab, setTabState] = useState(1);
    const [uploadedImageSrc, setUploadedImageSrc] = useState(null);

    const changeTab = (index) => {
        setTabState(index);
    };

    const fileInputRef = useRef(null);

    const handleImageUpload = () => {
        fileInputRef.current.click();
    };

    function handleFileSelected(event) {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const imageSrc = e.target.result;
                setUploadedImageSrc(imageSrc);
            };

            reader.readAsDataURL(selectedFile);
        }
    };




    const PostData = [
        {
            id: 1,
            username : "미키",
            date : "06/05 15:44",
            title : "우리집 강아지",
            content : "사진 공유합니다",
            likes : 12,
            comment : 5,
            image : postImg1,
        },
        {
            id: 2,
            username : "짱구",
            date : "06/05 15:44",
            title : "어떤 훈련을 시켜야할까요?",
            content : "살이 너무 쪘어요 ㅠ 곧 굴러다니겠어요",
            likes : 3,
            comment : 15,
            image : postImg2,
        },
        {
            id: 3,
            username : "초코",
            date : "06/05 15:44",
            title : "도그랑 리뷰 이벤트",
            content : "내일부터 도그랑 사료 이벤트 한대요~~",
            likes : 23,
            comment : 13,
            image : postImg3,
        }
    ];



    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % PostData.length);

        }, 3000);

        return () => clearInterval(interval);
    }, [PostData.length]);
    

    return (
        <>
            <div id="community">
                <h1>정보 공유 커뮤니티</h1>
                <p>
                    커뮤니티는 사용자들을 연결하며
                    <br />
                    가치있는 정보와 경험을 공유할 수 있습니다.
                </p>

                <div className="community-container">
                    <div className="community-tab">
                        <ul>
                            <li>
                                <a href="#community" className={tab === 1 ? "on" : ""} onClick={() => changeTab(1)}>
                                    작성하기
                                </a>
                            </li>
                            <li>
                                <a href="#community" className={tab === 2 ? "on" : ""} onClick={() => changeTab(2)} >
                                    둘러보기
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={tab === 1 ? "writeCommunity community-content active" : "writeCommunity community-content"}>
                        <div className="write-category">
                            <select name="write-category" id="write-category">
                                <option value="chat">잡담</option>
                                <option value="question">질문</option>
                                <option value="info">정보</option>
                            </select>

                            <form className="write-area" action="">
                                <label htmlFor="write-title">제목</label>
                                <input id="write-title" type="text" placeholder="제목을 입력해주세요."/>

                                <label htmlFor="write-post">내용</label>
                                <textarea name="write-post" id="write-post" rows="9" cols="40" placeholder="내용을 입력해주세요. "></textarea>

                                <label id="upload-image-label">
                                    이미지 업로드
                                </label>

                                <div className="image-uploaded">
                                    <input ref={fileInputRef} type="file" style={{ display: "none" }} onChange={handleFileSelected}/>
                                    {uploadedImageSrc && (
                                        <img src={uploadedImageSrc} alt="Uploaded"></img>
                                    )}

                                    <div className="upload-image-btn" onClick={handleImageUpload}>
                                        <img src={Add} alt="add" />
                                    </div>
                                </div>

                                <div className="upload-post">
                                    <input type="reset" value="취소" />
                                    <input type="submit" value="완료" />
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className={tab === 2 ? "ReadCommunity community-content active" : "ReadCommunity community-content"}>
                        <div className="read-category">
                            <p className={currentIndex === 0 ? "active" : ""}>잡담</p>
                            <p className={currentIndex === 1 ? "active" : ""}>질문</p>
                            <p className={currentIndex === 2 ? "active" : ""}>정보</p>
                        </div>
                        <div className="read-area">
                            <div className="post-container" style={{marginLeft : `-${currentIndex * 100}%`}}>
                                {PostData.map((post) => (
                                    <Post key = {post.id} username = {post.username} title = {post.title} date = {post.date} content = {post.content} likes = {post.likes} comment = {post.comment} image={post.image}/>

                                ))}
                           
                            </div>
                        </div>

                        <div className="comment">
                            <input type="text" placeholder="댓글을 남겨보세요" />
                            <img src={Send} alt="send" />
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    );
};

export default Community;
