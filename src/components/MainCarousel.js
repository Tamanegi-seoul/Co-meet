import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

// Main page안의 슬라이드 배너
// https://velog.io/@owlsuri/React-slick-Custom 참고사이트

export default function MainCarousel(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <SlideList>
      <Slider {...settings}>
        <FirstMainpage
          onClick={() => {
            window.open(
              "https://www.notion.so/26ecc9e13b114ba5908cdf308a24c7fc",
              "_blank"
            );
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ paddingTop: "50px" }}>
              <button>notice</button>
              <h2>
                스터디와 사이드 프로젝트를 찾을 수 있는 개발자 스터디 플랫폼
              </h2>
              <h2>
                <span>"Co Meet" </span>을 소개할게요!
              </h2>
            </div>
            <div>
              <img
                style={{
                  width: "300px",
                  height: "300px",
                }}
                src="/img/slideimage.jpeg"
                alt="slideImage"
              />
            </div>
          </div>
        </FirstMainpage>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </SlideList>
  );
}

const SlideList = styled.div`
  width: 100%;
  height: 300px;
  cursor: pointer;
  background-color: #f8f8f8;
`;

const FirstMainpage = styled.div`
  width: 100%;

  button {
    border-radius: 50px;
    padding: 5px 30px;
    font-weight: bold;
    background-color: #00b0ff;
    color: white;
    border: none;
    outline: none;
    font-size: 16px;
  }

  h2 {
    font-size: 26px;
    font-weight: 900;
  }

  span {
    font-size: 38px;
    color: #1976d2;
  }
`;
