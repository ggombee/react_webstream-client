/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import Slider from 'react-slick';
import EventImg from '../../../assets/sample/large.png';

export const Event = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    afterChange: (current: React.SetStateAction<number>) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div css={EventWrapper}>
      <p>Event</p>
      <span>
        <span>{activeSlide + 1}</span>/<span>5</span>
      </span>
      <Slider {...settings}>
        <div css={EventItem}>
          <img src={EventImg} />
          <span>Hot 100 of th Month Summary</span>
          <p>6/12 - 7/10 Track</p>
        </div>
        <div css={EventItem}>
          <img src={EventImg} />
          <span>OUT NOW</span>
          <p>BILLBOARD KOREA MAGAZINE vol.5</p>
        </div>
        <div css={EventItem}>
          <img src={EventImg} />
          <span>MOST TOP 10 Song</span>
          <p>K-pop 100 First half settlement</p>
        </div>
        <div css={EventItem}>
          <img src={EventImg} />
          <span>Vision drawn by BM of KARD</span>
          <p>Beato News</p>
        </div>
      </Slider>
    </div>
  );
};

const EventWrapper = css`
  position: absolute;
  width: 150vh;
  height: 400px;
  left: 282px;
  top: 135px;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 36px;
    color: #ffffff;
  }
`;

const EventItem = css`
  float: left;
  width: 500px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  color: #ffffff;
  img {
    width: 489px;
    height: 275.82px;
    left: 258px;
    top: 192.59px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 2px;
    color: #75767c;
  }
`;
