import React, {useState} from 'react'
import './record.css';

const Record = () => {
  const [tab, setTabState] = useState(1);

  const changeTab = (index) => {
    setTabState(index);
  }




  return (
    <>
      <div id="record">
        <h1>식단﹒활동 기록</h1>
        <div className="record-tab">
          <ul>
            <li>
              <a href="#record" className={tab === 1
                ? "on"
                : ""
              }
              onClick={()=> changeTab(1)}
              >
                식단
              </a>
            </li>
            <li>
              <a href="#record" className={tab === 2
                ? "on"
                : ""
              }
              onClick={()=> changeTab(2)}>활동</a>
            </li>
          </ul>
        </div>

        {/* 식단 */}

        <div className={
          tab === 1
          ? "food record-container active"
          : "food record-container"
        }
        >
          <p>
            반려동물의 식단을 기록하면 영양성분을 분석해 <br />
            칼로리와 탄단지 비율을 확인할 수 있습니다.
          </p>

          <div className="record-btn">
            <a href="#record">
              <svg
                className="record-icon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0391 12.3578L22.9591 10.4382L26.032 13.5111L24.1286 15.4149"
                  fill="#FFF9E9"
                />
                <path
                  d="M15.8623 19.6628L16.8564 20.657L15.4131 21.1903L15.8623 19.6628Z"
                  fill="#FF9900"
                />
                <path
                  d="M9.30078 8.28125H20.5508M9.30078 11.6146H19.9674M9.30078 14.9479H16.4295M9.30078 18.2812H14.3866M9.30078 21.6146H13.5283"
                  stroke="#FF9900"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8623 19.6628L16.8564 20.657L15.4131 21.1903L15.8623 19.6628Z"
                  fill="#FF9900"
                />
                <path
                  d="M24.2029 9.5776L24.8508 8.92969L27.54 11.6189L26.86 12.2989M16.7833 16.9972L19.4725 19.6864M16.9554 20.663L19.3154 19.8434L25.8112 13.3476L23.122 10.6584L16.6262 17.1543L15.8037 19.5172L16.9554 20.663Z"
                  stroke="#FF9900"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8048 19.5117L15.2285 21.2404L16.9614 20.6604M21.3756 12.5654L23.9598 15.1496"
                  stroke="#FF9900"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.0508 18.4284V24.948H6.80078V4.948H23.0508V8.47133"
                  stroke="#FF9900"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              식단 기록하러 가기
            </a>
            <svg
              className="bigArrow"
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.7869 6.45189C16.9234 6.59732 17 6.79446 17 7C17 7.20554 16.9234 7.40268 16.7869 7.54811L10.9581 13.7531C10.8914 13.8293 10.811 13.8905 10.7216 13.9329C10.6322 13.9752 10.5358 13.998 10.4379 13.9999C10.3401 14.0017 10.2429 13.9826 10.1522 13.9436C10.0615 13.9045 9.97907 13.8465 9.90988 13.7728C9.84069 13.6992 9.78615 13.6114 9.74951 13.5149C9.71286 13.4183 9.69486 13.3148 9.69659 13.2107C9.69832 13.1065 9.71973 13.0038 9.75955 12.9087C9.79937 12.8136 9.85679 12.7279 9.92837 12.6569L14.5137 7.77563L0.728599 7.77563C0.535362 7.77563 0.35004 7.69391 0.213401 7.54845C0.0767619 7.40299 -4.13476e-07 7.20571 -4.13476e-07 7C-4.13476e-07 6.79429 0.0767619 6.59701 0.213401 6.45155C0.35004 6.30609 0.535362 6.22437 0.728599 6.22437L14.5137 6.22437L9.92837 1.34309C9.85679 1.27208 9.79937 1.18645 9.75955 1.0913C9.71973 0.996162 9.69832 0.893455 9.69659 0.789311C9.69486 0.685167 9.71286 0.58172 9.74951 0.48514C9.78615 0.388561 9.84069 0.300828 9.90988 0.227176C9.97907 0.153524 10.0615 0.0954606 10.1522 0.0564506C10.2429 0.0174406 10.3401 -0.00171679 10.4379 0.000120711C10.5358 0.00195821 10.6322 0.0247529 10.7216 0.0671456C10.811 0.109538 10.8914 0.17066 10.9581 0.246865L16.7869 6.45189Z"
                fill="#222222"
              />
            </svg>
          </div>

          <div className="record-content">
            <div className="title">
              <h3>섭취량</h3>
              <a href="#record">
                식단 기록하기
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.15019 17.508C6.55853 17.9163 7.21686 17.9163 7.62519 17.508L14.5502 10.583C14.8752 10.258 14.8752 9.73296 14.5502 9.40796L7.62519 2.48296C7.21686 2.07463 6.55853 2.07463 6.15019 2.48296C5.74186 2.89129 5.74186 3.54963 6.15019 3.95796L12.1835 9.99963L6.14186 16.0413C5.74186 16.4413 5.74186 17.108 6.15019 17.508Z"
                    fill="#B3B3B3"
                  />
                </svg>
              </a>
            </div>

            <div className="food-content1">
              <svg
                width="145"
                height="145"
                viewBox="0 0 145 145"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <mask id="path-1-inside-1_1_3418" fill="white">
                    <path d="M145 72.5C145 112.541 112.541 145 72.5 145C32.4594 145 0 112.541 0 72.5C0 32.4594 32.4594 0 72.5 0C112.541 0 145 32.4594 145 72.5ZM9.425 72.5C9.425 107.335 37.6646 135.575 72.5 135.575C107.335 135.575 135.575 107.335 135.575 72.5C135.575 37.6646 107.335 9.425 72.5 9.425C37.6646 9.425 9.425 37.6646 9.425 72.5Z" />
                  </mask>
                  <path
                    d="M145 72.5C145 112.541 112.541 145 72.5 145C32.4594 145 0 112.541 0 72.5C0 32.4594 32.4594 0 72.5 0C112.541 0 145 32.4594 145 72.5ZM9.425 72.5C9.425 107.335 37.6646 135.575 72.5 135.575C107.335 135.575 135.575 107.335 135.575 72.5C135.575 37.6646 107.335 9.425 72.5 9.425C37.6646 9.425 9.425 37.6646 9.425 72.5Z"
                    stroke="url(#paint0_linear_1_3418)"
                    stroke-width="32"
                    stroke-linecap="round"
                    mask="url(#path-1-inside-1_1_3418)"
                  />
                </g>
                <mask id="path-2-inside-2_1_3418" fill="white">
                  <path d="M72.5 4.7125C72.5 2.10986 74.6121 -0.0159538 77.2093 0.153095C87.5958 0.829153 97.7346 3.73541 106.927 8.69542C117.505 14.4027 126.497 22.6503 133.096 32.6959C139.695 42.7415 143.693 54.2701 144.73 66.2443C145.767 78.2185 143.811 90.2627 139.037 101.293C134.264 112.324 126.823 121.995 117.384 129.436C107.945 136.876 96.8049 141.854 84.9648 143.92C73.1247 145.987 60.9566 145.077 49.5553 141.273C39.6469 137.968 30.5879 132.566 22.985 125.458C21.0839 123.68 21.1877 120.685 23.085 118.904V118.904C24.9822 117.122 27.9532 117.23 29.8715 118.989C36.3924 124.969 44.1123 129.522 52.5381 132.333C62.4572 135.642 73.0435 136.434 83.3444 134.636C93.6452 132.838 103.338 128.508 111.549 122.034C119.761 115.56 126.235 107.147 130.387 97.5502C134.54 87.9536 136.242 77.4751 135.34 67.0575C134.438 56.6399 130.959 46.6101 125.219 37.8704C119.478 29.1307 111.654 21.9554 102.452 16.99C94.6345 12.7721 86.0308 10.2613 77.2082 9.60095C74.6128 9.40668 72.5 7.31514 72.5 4.7125V4.7125Z" />
                </mask>
                <path
                  d="M72.5 4.7125C72.5 2.10986 74.6121 -0.0159538 77.2093 0.153095C87.5958 0.829153 97.7346 3.73541 106.927 8.69542C117.505 14.4027 126.497 22.6503 133.096 32.6959C139.695 42.7415 143.693 54.2701 144.73 66.2443C145.767 78.2185 143.811 90.2627 139.037 101.293C134.264 112.324 126.823 121.995 117.384 129.436C107.945 136.876 96.8049 141.854 84.9648 143.92C73.1247 145.987 60.9566 145.077 49.5553 141.273C39.6469 137.968 30.5879 132.566 22.985 125.458C21.0839 123.68 21.1877 120.685 23.085 118.904V118.904C24.9822 117.122 27.9532 117.23 29.8715 118.989C36.3924 124.969 44.1123 129.522 52.5381 132.333C62.4572 135.642 73.0435 136.434 83.3444 134.636C93.6452 132.838 103.338 128.508 111.549 122.034C119.761 115.56 126.235 107.147 130.387 97.5502C134.54 87.9536 136.242 77.4751 135.34 67.0575C134.438 56.6399 130.959 46.6101 125.219 37.8704C119.478 29.1307 111.654 21.9554 102.452 16.99C94.6345 12.7721 86.0308 10.2613 77.2082 9.60095C74.6128 9.40668 72.5 7.31514 72.5 4.7125V4.7125Z"
                  stroke="url(#paint1_linear_1_3418)"
                  stroke-width="32"
                  stroke-linecap="round"
                  mask="url(#path-2-inside-2_1_3418)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_3418"
                    x1="123.46"
                    y1="19.4384"
                    x2="24.4293"
                    y2="126.35"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DC7B6E" />
                    <stop offset="1" stop-color="#FFCCBC" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_3418"
                    x1="123.46"
                    y1="19.4384"
                    x2="24.4293"
                    y2="126.35"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DC7B6E" />
                    <stop offset="1" stop-color="#FFCCBC" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="value">
                <p>
                  <span className="current">98.3</span>kcal
                </p>
                <p>/ 178.5</p>
              </div>
            </div>

            <div className="food-content2">
              <div className="small-chart chart1">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="35" fill="white" />
                  <g opacity="0.2">
                    <mask id="path-2-inside-1_8_1399" fill="white">
                      <path d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM5.2 40C5.2 59.2195 20.7805 74.8 40 74.8C59.2195 74.8 74.8 59.2195 74.8 40C74.8 20.7805 59.2195 5.2 40 5.2C20.7805 5.2 5.2 20.7805 5.2 40Z" />
                    </mask>
                    <path
                      d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM5.2 40C5.2 59.2195 20.7805 74.8 40 74.8C59.2195 74.8 74.8 59.2195 74.8 40C74.8 20.7805 59.2195 5.2 40 5.2C20.7805 5.2 5.2 20.7805 5.2 40Z"
                      stroke="url(#paint0_linear_8_1399)"
                      stroke-width="32"
                      stroke-linecap="round"
                      mask="url(#path-2-inside-1_8_1399)"
                    />
                  </g>
                  <mask id="path-3-inside-2_8_1399" fill="white">
                    <path d="M40 2.6C40 1.16406 41.1654 -0.00880257 42.5983 0.0844619C49.2862 0.519762 55.7727 2.63007 61.4528 6.23941C67.866 10.3146 72.9858 16.1321 76.213 23.0111C79.4402 29.8902 80.6413 37.5461 79.6757 45.0829C78.8206 51.7582 76.2971 58.0954 72.3568 63.5168C71.5126 64.6784 69.8657 64.8248 68.7614 63.907V63.907C67.6571 62.9891 67.5149 61.355 68.3478 60.1853C71.6628 55.5298 73.7883 50.1174 74.5179 44.4221C75.3579 37.8651 74.3129 31.2044 71.5053 25.2197C68.6976 19.2349 64.2434 14.1737 58.6639 10.6283C53.8178 7.54885 48.2969 5.72365 42.5977 5.29707C41.1657 5.18989 40 4.03594 40 2.6V2.6Z" />
                  </mask>
                  <path
                    d="M40 2.6C40 1.16406 41.1654 -0.00880257 42.5983 0.0844619C49.2862 0.519762 55.7727 2.63007 61.4528 6.23941C67.866 10.3146 72.9858 16.1321 76.213 23.0111C79.4402 29.8902 80.6413 37.5461 79.6757 45.0829C78.8206 51.7582 76.2971 58.0954 72.3568 63.5168C71.5126 64.6784 69.8657 64.8248 68.7614 63.907V63.907C67.6571 62.9891 67.5149 61.355 68.3478 60.1853C71.6628 55.5298 73.7883 50.1174 74.5179 44.4221C75.3579 37.8651 74.3129 31.2044 71.5053 25.2197C68.6976 19.2349 64.2434 14.1737 58.6639 10.6283C53.8178 7.54885 48.2969 5.72365 42.5977 5.29707C41.1657 5.18989 40 4.03594 40 2.6V2.6Z"
                    stroke="url(#paint1_linear_8_1399)"
                    stroke-width="32"
                    stroke-linecap="round"
                    mask="url(#path-3-inside-2_8_1399)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_8_1399"
                      x1="68.1159"
                      y1="10.7246"
                      x2="13.4783"
                      y2="69.7101"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9A01" />
                      <stop offset="1" stop-color="#FFE5BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_8_1399"
                      x1="68.1159"
                      y1="10.7246"
                      x2="13.4783"
                      y2="69.7101"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9A01" />
                      <stop offset="1" stop-color="#FFE5BF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="percentage">36%</div>
                <p>탄수화물</p>
              </div>
              <div className="small-chart chart2">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="35" fill="white" />
                  <g opacity="0.2">
                    <mask id="path-2-inside-1_8_1411" fill="white">
                      <path d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM5.2 40C5.2 59.2195 20.7805 74.8 40 74.8C59.2195 74.8 74.8 59.2195 74.8 40C74.8 20.7805 59.2195 5.2 40 5.2C20.7805 5.2 5.2 20.7805 5.2 40Z" />
                    </mask>
                    <path
                      d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM5.2 40C5.2 59.2195 20.7805 74.8 40 74.8C59.2195 74.8 74.8 59.2195 74.8 40C74.8 20.7805 59.2195 5.2 40 5.2C20.7805 5.2 5.2 20.7805 5.2 40Z"
                      stroke="url(#paint0_linear_8_1411)"
                      stroke-width="32"
                      stroke-linecap="round"
                      mask="url(#path-2-inside-1_8_1411)"
                    />
                  </g>
                  <mask id="path-3-inside-2_8_1411" fill="white">
                    <path d="M40 2.6C40 1.16406 41.1653 -0.00880332 42.5982 0.0844622C48.7453 0.484564 54.7295 2.30017 60.0776 5.40389C66.1768 8.9435 71.2318 14.0326 74.7303 20.1555C78.2288 26.2783 80.0465 33.2172 79.9991 40.2689C79.9517 47.3206 78.0409 54.2345 74.4604 60.3097C70.8798 66.3849 65.7568 71.4056 59.6106 74.8629C53.4644 78.3202 46.5134 80.0912 39.4622 79.9964C32.411 79.9016 25.5101 77.9443 19.4591 74.323C14.1532 71.1477 9.66611 66.7919 6.33848 61.6079C5.56279 60.3995 6.0244 58.8119 7.28063 58.1164V58.1164C8.53686 57.4208 10.1111 57.8817 10.8985 59.0825C13.774 63.4679 17.6104 67.1566 22.1294 69.861C27.3938 73.0116 33.3975 74.7144 39.5321 74.7969C45.6667 74.8793 51.714 73.3386 57.0612 70.3307C62.4084 67.3229 66.8654 62.9549 69.9805 57.6694C73.0956 52.384 74.758 46.3689 74.7992 40.2339C74.8405 34.099 73.2591 28.0621 70.2154 22.7352C67.1716 17.4084 62.7738 12.9808 57.4675 9.90138C52.9125 7.25794 47.8271 5.68851 42.5977 5.29708C41.1657 5.1899 40 4.03594 40 2.6V2.6Z" />
                  </mask>
                  <path
                    d="M40 2.6C40 1.16406 41.1653 -0.00880332 42.5982 0.0844622C48.7453 0.484564 54.7295 2.30017 60.0776 5.40389C66.1768 8.9435 71.2318 14.0326 74.7303 20.1555C78.2288 26.2783 80.0465 33.2172 79.9991 40.2689C79.9517 47.3206 78.0409 54.2345 74.4604 60.3097C70.8798 66.3849 65.7568 71.4056 59.6106 74.8629C53.4644 78.3202 46.5134 80.0912 39.4622 79.9964C32.411 79.9016 25.5101 77.9443 19.4591 74.323C14.1532 71.1477 9.66611 66.7919 6.33848 61.6079C5.56279 60.3995 6.0244 58.8119 7.28063 58.1164V58.1164C8.53686 57.4208 10.1111 57.8817 10.8985 59.0825C13.774 63.4679 17.6104 67.1566 22.1294 69.861C27.3938 73.0116 33.3975 74.7144 39.5321 74.7969C45.6667 74.8793 51.714 73.3386 57.0612 70.3307C62.4084 67.3229 66.8654 62.9549 69.9805 57.6694C73.0956 52.384 74.758 46.3689 74.7992 40.2339C74.8405 34.099 73.2591 28.0621 70.2154 22.7352C67.1716 17.4084 62.7738 12.9808 57.4675 9.90138C52.9125 7.25794 47.8271 5.68851 42.5977 5.29708C41.1657 5.1899 40 4.03594 40 2.6V2.6Z"
                    stroke="url(#paint1_linear_8_1411)"
                    stroke-width="32"
                    stroke-linecap="round"
                    mask="url(#path-3-inside-2_8_1411)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_8_1411"
                      x1="68.1159"
                      y1="10.7246"
                      x2="13.4783"
                      y2="69.7101"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9A01" />
                      <stop offset="1" stop-color="#FFE5BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_8_1411"
                      x1="68.1159"
                      y1="10.7246"
                      x2="13.4783"
                      y2="69.7101"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9A01" />
                      <stop offset="1" stop-color="#FFE5BF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="percentage">67%</div>
                <p>단백질</p>
              </div>
              <div className="small-chart chart3">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="35" fill="white" />
                  <g opacity="0.2">
                    <mask id="path-2-inside-1_8_1403" fill="white">
                      <path d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM5.2 40C5.2 59.2195 20.7805 74.8 40 74.8C59.2195 74.8 74.8 59.2195 74.8 40C74.8 20.7805 59.2195 5.2 40 5.2C20.7805 5.2 5.2 20.7805 5.2 40Z" />
                    </mask>
                    <path
                      d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM5.2 40C5.2 59.2195 20.7805 74.8 40 74.8C59.2195 74.8 74.8 59.2195 74.8 40C74.8 20.7805 59.2195 5.2 40 5.2C20.7805 5.2 5.2 20.7805 5.2 40Z"
                      stroke="url(#paint0_linear_8_1403)"
                      stroke-width="32"
                      stroke-linecap="round"
                      mask="url(#path-2-inside-1_8_1403)"
                    />
                  </g>
                  <mask id="path-3-inside-2_8_1403" fill="white">
                    <path d="M40 2.6C40 1.16406 41.1654 -0.00880826 42.5983 0.0844325C51.1878 0.643363 59.3946 3.96195 65.9755 9.58171C73.2174 15.7659 78.0153 24.3308 79.5065 33.7364C80.9978 43.1419 79.0844 52.7709 74.1106 60.8918C69.5907 68.2716 62.8129 73.9659 54.8175 77.1544C53.4837 77.6863 52.0127 76.9314 51.5685 75.5659V75.5659C51.1243 74.2003 51.8761 72.7424 53.2046 72.1975C60.0243 69.4009 65.8031 64.4996 69.6762 58.1759C74.0034 51.1107 75.6681 42.7335 74.3707 34.5506C73.0733 26.3678 68.8991 18.9163 62.5987 13.5361C56.9595 8.72051 49.9481 5.84711 42.5978 5.29705C41.1658 5.18989 40 4.03594 40 2.6V2.6Z" />
                  </mask>
                  <path
                    d="M40 2.6C40 1.16406 41.1654 -0.00880826 42.5983 0.0844325C51.1878 0.643363 59.3946 3.96195 65.9755 9.58171C73.2174 15.7659 78.0153 24.3308 79.5065 33.7364C80.9978 43.1419 79.0844 52.7709 74.1106 60.8918C69.5907 68.2716 62.8129 73.9659 54.8175 77.1544C53.4837 77.6863 52.0127 76.9314 51.5685 75.5659V75.5659C51.1243 74.2003 51.8761 72.7424 53.2046 72.1975C60.0243 69.4009 65.8031 64.4996 69.6762 58.1759C74.0034 51.1107 75.6681 42.7335 74.3707 34.5506C73.0733 26.3678 68.8991 18.9163 62.5987 13.5361C56.9595 8.72051 49.9481 5.84711 42.5978 5.29705C41.1658 5.18989 40 4.03594 40 2.6V2.6Z"
                    stroke="url(#paint1_linear_8_1403)"
                    stroke-width="32"
                    stroke-linecap="round"
                    mask="url(#path-3-inside-2_8_1403)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_8_1403"
                      x1="68.1159"
                      y1="10.7246"
                      x2="13.4783"
                      y2="69.7101"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9A01" />
                      <stop offset="1" stop-color="#FFE5BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_8_1403"
                      x1="68.1159"
                      y1="10.7246"
                      x2="13.4783"
                      y2="69.7101"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF9A01" />
                      <stop offset="1" stop-color="#FFE5BF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="percentage">45%</div>
                <p>지방</p>
              </div>
            </div>
          </div>
        </div>

        <div className={
          tab === 2
          ? "exercise record-container active"
          : "exercise record-container"
        }>
          <p>
            어떤 활동을 했는지 기록하고 <br />
            얼마나 많은 칼로리를 소모했는지 확인할 수 있습니다.
          </p>


          <div className="record-btn">
            <a href="#record">
              <svg
                className="record-icon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0391 12.3578L22.9591 10.4382L26.032 13.5111L24.1286 15.4149"
                  fill="#FFF9E9"
                />
                <path
                  d="M15.8623 19.6628L16.8564 20.657L15.4131 21.1903L15.8623 19.6628Z"
                  fill="#FF9900"
                />
                <path
                  d="M9.30078 8.28125H20.5508M9.30078 11.6146H19.9674M9.30078 14.9479H16.4295M9.30078 18.2812H14.3866M9.30078 21.6146H13.5283"
                  stroke="#FF9900"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8623 19.6628L16.8564 20.657L15.4131 21.1903L15.8623 19.6628Z"
                  fill="#FF9900"
                />
                <path
                  d="M24.2029 9.5776L24.8508 8.92969L27.54 11.6189L26.86 12.2989M16.7833 16.9972L19.4725 19.6864M16.9554 20.663L19.3154 19.8434L25.8112 13.3476L23.122 10.6584L16.6262 17.1543L15.8037 19.5172L16.9554 20.663Z"
                  stroke="#FF9900"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8048 19.5117L15.2285 21.2404L16.9614 20.6604M21.3756 12.5654L23.9598 15.1496"
                  stroke="#FF9900"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.0508 18.4284V24.948H6.80078V4.948H23.0508V8.47133"
                  stroke="#FF9900"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              활동 기록하러 가기
            </a>
            <svg
              className="bigArrow"
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.7869 6.45189C16.9234 6.59732 17 6.79446 17 7C17 7.20554 16.9234 7.40268 16.7869 7.54811L10.9581 13.7531C10.8914 13.8293 10.811 13.8905 10.7216 13.9329C10.6322 13.9752 10.5358 13.998 10.4379 13.9999C10.3401 14.0017 10.2429 13.9826 10.1522 13.9436C10.0615 13.9045 9.97907 13.8465 9.90988 13.7728C9.84069 13.6992 9.78615 13.6114 9.74951 13.5149C9.71286 13.4183 9.69486 13.3148 9.69659 13.2107C9.69832 13.1065 9.71973 13.0038 9.75955 12.9087C9.79937 12.8136 9.85679 12.7279 9.92837 12.6569L14.5137 7.77563L0.728599 7.77563C0.535362 7.77563 0.35004 7.69391 0.213401 7.54845C0.0767619 7.40299 -4.13476e-07 7.20571 -4.13476e-07 7C-4.13476e-07 6.79429 0.0767619 6.59701 0.213401 6.45155C0.35004 6.30609 0.535362 6.22437 0.728599 6.22437L14.5137 6.22437L9.92837 1.34309C9.85679 1.27208 9.79937 1.18645 9.75955 1.0913C9.71973 0.996162 9.69832 0.893455 9.69659 0.789311C9.69486 0.685167 9.71286 0.58172 9.74951 0.48514C9.78615 0.388561 9.84069 0.300828 9.90988 0.227176C9.97907 0.153524 10.0615 0.0954606 10.1522 0.0564506C10.2429 0.0174406 10.3401 -0.00171679 10.4379 0.000120711C10.5358 0.00195821 10.6322 0.0247529 10.7216 0.0671456C10.811 0.109538 10.8914 0.17066 10.9581 0.246865L16.7869 6.45189Z"
                fill="#222222"
              />
            </svg>
          </div>

          <div className="record-content">
            <div className="title">
              <h3>소모량</h3>
              <a href="#">
                활동 기록하기
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.15019 17.508C6.55853 17.9163 7.21686 17.9163 7.62519 17.508L14.5502 10.583C14.8752 10.258 14.8752 9.73296 14.5502 9.40796L7.62519 2.48296C7.21686 2.07463 6.55853 2.07463 6.15019 2.48296C5.74186 2.89129 5.74186 3.54963 6.15019 3.95796L12.1835 9.99963L6.14186 16.0413C5.74186 16.4413 5.74186 17.108 6.15019 17.508Z"
                    fill="#B3B3B3"
                  />
                </svg>
              </a>
            </div>

            <div className="exercise-content1">
              <p>
                <span>98.30</span>/ 178.50kcal
              </p>
              <svg
                width="473"
                height="19"
                viewBox="0 0 473 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="473"
                  height="19"
                  rx="9.5"
                  fill="#D9D9D9"
                  fill-opacity="0.8"
                />
                <rect
                  width="285.053"
                  height="19"
                  rx="9.5"
                  fill="url(#paint0_linear_1_3652)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_3652"
                    x1="6.2649"
                    y1="19"
                    x2="305.414"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF9A01" />
                    <stop offset="1" stop-color="#FFD697" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
            <div className="exercise-content2">
              <h3>활동</h3>
              <ul className='exercise-list'>
                <li>
                  <div className="left">
                     <div className="box"></div>
                     <div className="text">
                      <h4 className='list-name'>산책</h4>
                      <p>1.2km﹒1시간 12분</p>  
                     </div>
                  </div>
                  <p>56.10kcal</p>
                </li>
                <li>
                  <div className="left">
                     <div className="box"></div>
                     <div className="text">
                      <h4 className='list-name'>훈련</h4>
                      <p>55분</p>  
                     </div>
                  </div>
                  <p>42.20kcal</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Record