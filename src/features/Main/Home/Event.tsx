/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import Slider from 'react-slick';
import EventImg from '../../../assets/sample/event1.png';

export const Event = () => {
  return (
    <div css={EventWrapper}>
      <p>Event</p>

      <div css={EventItem}>
        <img src={EventImg} />
        <span>Hot 100 of th Month Summary</span>
        <p>6/12 - 7/10 Track</p>
      </div>
    </div>
  );
};

const EventWrapper = css`
  position: absolute;
  width: 140vh;
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
  margin-top: 23px;
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
