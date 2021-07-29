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
    slidesToShow: 3.15,
    afterChange: (current: React.SetStateAction<number>) => setActiveSlide(current),
  };

  return (
    <div css={EventWrapper}>
      <p>Event</p>
      {/* <span>
        <span>{activeSlide + 1}</span>/<span>5</span>
      </span> */}
      <Slider {...settings}>
        <div css={EventItem}>
          <img src={EventImg} />
          <span> Hot 100 of th Month Summary</span>
          <br />
          <span
            css={css`
              margin-top: 3px;
              font-style: normal;
              font-weight: normal;
              font-size: 17px;
              line-height: 22px;
              color: #75767c;
            `}
          >
            6/12 - 7/10 Track
          </span>
        </div>
        <div css={EventItem}>
          <img src={EventImg} />
          <span>OUT NOW</span>
          <br />
          <span
            css={css`
              margin-top: 3px;
              font-style: normal;
              font-weight: normal;
              font-size: 17px;
              line-height: 22px;
              color: #75767c;
            `}
          >
            BILLBOARD KOREA MAGAZINE vol.5
          </span>
        </div>
        <div css={EventItem}>
          <img src={EventImg} />
          <span>MOST TOP 10 Song</span>
          <br />
          <span
            css={css`
              margin-top: 3px;
              font-style: normal;
              font-weight: normal;
              font-size: 17px;
              line-height: 22px;
              color: #75767c;
            `}
          >
            K-pop 100 First half settlement
          </span>
        </div>
        <div css={EventItem}>
          <img src={EventImg} />
          <span>Vision drawn by BM of KARD</span>
          <br />
          <span
            css={css`
              margin-top: 3px;
              font-style: normal;
              font-weight: normal;
              font-size: 17px;
              line-height: 22px;
              color: #75767c;
            `}
          >
            Beato News
          </span>
        </div>
      </Slider>
    </div>
  );
};

const EventWrapper = css`
  position: absolute;
  flex-wrap: nowrap;
  width: 165vh;
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
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 29px;

  img {
    width: 489px;
    height: 275.82px;
    left: 258px;
    top: 192.59px;
    margin-bottom: 19px;
  }
`;
