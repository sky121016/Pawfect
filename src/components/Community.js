import React, { useState, useRef } from "react";
import './community.css';
import Add from '../assets/icons/Add.png';
import { upload } from "@testing-library/user-event/dist/upload";

const Community = () => {
  const [tab, setTabState] = useState(1);
  const [uploadedImageSrc, setUploadedImageSrc] = useState(null);

  const changeTab = (index) => {
    setTabState(index);
  };

  const fileInputRef = useRef(null);

  const handleImageUpload = ()=>{
    fileInputRef.current.click();
  };

  function handleFileSelected(event) {
    const selectedFile = event.target.files[0];

    if(selectedFile){
        const reader = new FileReader();

        reader.onload = (e) => {
            const imageSrc = e.target.result;
            setUploadedImageSrc(imageSrc);
        };

        reader.readAsDataURL(selectedFile);
    }
  };

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
                        <a
                        href="#community"
                        className={tab === 1 ? "on" : ""}
                        onClick={() => changeTab(1)}
                        >
                        작성하기
                        </a>
                    </li>
                    <li>
                        <a
                        href="#community"
                        className={tab === 2 ? "on" : ""}
                        onClick={() => changeTab(2)}
                        >
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
                        <input id="write-title" type="text" placeholder="제목을 입력해주세요." />
                        
                        <label htmlFor="">내용</label>
                        {/* <input id="write-post" type="textarea" cols="100" /> */}
                        <textarea name="write-post" id="write-post" rows="9" cols="40"  placeholder="내용을 입력해주세요. "></textarea>


                        <label htmlFor="upload-image">이미지 업로드</label>
                        
                        <div className="image-uploaded">

                            <input ref={fileInputRef} type="file" style={{display : 'none'}} onChange={handleFileSelected} />
                            {uploadedImageSrc && <img src={uploadedImageSrc} alt="Uploaded"></img>}

                            <div className="upload-imgae-btn" onClick={handleImageUpload}>
                                <img src={Add} alt="add" />
                            </div>
                        </div>

                        <div className="upload-post">
                            <input type="reset" value="취소"/>
                            <input type="submit" value="완료"/>
                        </div>

                    </form>

                   
                </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Community;
