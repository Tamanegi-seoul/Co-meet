import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

// Main page안의 슬라이드 배너
// https://velog.io/@owlsuri/React-slick-Custom 참고사이트

export default function MainCarousel(props) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SlideList>
      <Slider {...settings}>
        <FirstMainPage
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
            <div>
              <button>notice</button>
              <h2>
                스터디와 사이드 프로젝트를 찾을 수 있는 개발자 스터디 플랫폼
              </h2>
              <h3>
                <span>"Co Meet"</span>을 소개할게요!
              </h3>
            </div>
            <div>
              <img
                style={{
                  width: "320px",
                }}
                src="/img/comeet_main.png"
                alt="slideImage"
              />
            </div>
          </div>
        </FirstMainPage>
        <SecondMainPage
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
            <div>
              <h2>스터디와 사이드프로젝트를 찾는 가장 쉬운 방법</h2>
              <h3>
                <span>Co Meet</span> 에서 함께 할 개발자를 찾으세요!
              </h3>
            </div>
            <div>
              <img
                style={{
                  width: "320px",
                }}
                src="/img/collabora.png"
                alt="slideImage"
              />
            </div>
          </div>
        </SecondMainPage>
      </Slider>
    </SlideList>
  );
}

const SlideList = styled.div`
  width: 100%;
  height: 300px;
  cursor: pointer;
`;

const FirstMainPage = styled.div`
  /* width: 60%; */
  padding: 50px 0;
  background-color: #f8f8f8;
  button {
    border-radius: 50px;
    padding: 7px 28px;
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
    font-size: 32px;
    color: #1976d2;
  }
`;

const SecondMainPage = styled.div`
  /* width: 60%; */
  padding: 70px 0;

  h2 {
    font-size: 26px;
    font-weight: 900;
    padding-top: 20px;
  }

  span {
    font-size: 30px;
    color: #1976d2;
  }
`;
