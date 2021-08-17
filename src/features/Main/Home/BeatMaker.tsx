/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Slider from 'react-slick';
import BeatMakerImg from '../../../assets/sample/medium.png';
import StarIcon from '../../../assets/Main/stars.png';
import ArrowIco from '../../../assets/Main/arrow_forward.png';

import { MakerState } from '../../../stores/Main/HotTrack/types';
import { MakerData } from '../../../stores/Main/HotTrack/__mocks__/mockData';

export const BeatMaker = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const history = useHistory();

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 3.15,
    afterChange: (current: React.SetStateAction<number>) => setActiveSlide(current),
  };

  return (
    <div css={BeatMakerWrapper}>
      <span>
        Beat Maker
        <button onClick={() => history.push({ pathname: '/beatmaker' })}>
          More
          <img src={ArrowIco} />
        </button>
      </span>

      <Slider {...settings}>
        {MakerData.map((maker: MakerState) => {
          return (
            <div css={BeatMakerItem} key={maker.index}>
              <img src={BeatMakerImg} />
              <div
                css={css`
                  display: block;
                  margin-top: 2px;
                  font-size: 20px;
                  line-height: 28px;
                `}
              >
                {maker.maker}
                {/* <img
                  src={StarIcon}
                  css={css`
                    width: 17px;
                    height: 17px;
                    left: 1359px;
                    top: 970px;
                  `}
                /> */}
                <div
                  css={css`
                    margin-top: 3px;
                    font-size: 16px;
                    line-height: 21px;
                    color: #75767c;
                  `}
                >
                  Followers {maker.follower}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

const BeatMakerWrapper = css`
  position: absolute;
  flex-wrap: nowrap;
  width: 780px;
  height: 200px;
  left: 1096px;
  top: 635px;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 42px;
  color: #ffffff;
  button {
    float: right;
    margin-top: 7px;
    background: #000000;
    border: none;
    font-size: 18px;
    line-height: 25px;
    color: #a5a6a8;
  }
  img {
    vertical-align: middle;
    margin-left: 2px;
  }
`;

const BeatMakerItem = css`
  margin-top: 16px;
  width: 47px;
  height: 28px;
  left: 1096px;
  top: 964px;
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;

  img {
    width: 206px;
    height: 206px;
    left: 1096px;
    top: 730px;
  }
`;
