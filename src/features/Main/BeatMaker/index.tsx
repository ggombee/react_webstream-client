/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { MainLayout } from '../../../Layout/main';
import MakerImg from '../../../assets/sample/maker.png';

export const BeatMaker = () => {
  return (
    <MainLayout>
      <div css={BeatMakerWrapper}>
        <p>Beat Maker</p>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
          `}
        >
          <div
            onClick={() => alert('준비중입니다.')}
            css={css`
              margin-top: 17px;
              position: absolute;
              width: 505px;
              height: 369px;
              left: 267px;
              top: 150px;
              background: #1d1d1f;
              box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.25);
              border-radius: 15px;
              img {
                display: block;
                margin: 30px auto;
              }
            `}
          >
            <img src={MakerImg} />
          </div>
          <div
            onClick={() => alert('준비중입니다.')}
            css={css`
              margin-top: 17px;
              position: absolute;
              width: 505px;
              height: 369px;
              left: 800px;
              top: 150px;
              background: #1d1d1f;
              box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.25);
              border-radius: 15px;
              img {
                display: block;
                margin: 30px auto;
              }
            `}
          >
            <img src={MakerImg} />
          </div>
          <div
            onClick={() => alert('준비중입니다.')}
            css={css`
              margin-top: 17px;
              position: absolute;
              width: 505px;
              height: 369px;
              left: 1333px;
              top: 150px;
              background: #1d1d1f;
              box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.25);
              border-radius: 15px;
              img {
                display: block;
                margin: 30px auto;
              }
            `}
          >
            <img src={MakerImg} />
          </div>
          <div
            onClick={() => alert('준비중입니다.')}
            css={css`
              margin-top: 17px;
              position: absolute;
              width: 505px;
              height: 369px;
              left: 267px;
              top: 550px;
              background: #1d1d1f;
              box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.25);
              border-radius: 15px;
              img {
                display: block;
                margin: 30px auto;
              }
            `}
          >
            <img src={MakerImg} />
          </div>
          <div
            onClick={() => alert('준비중입니다.')}
            css={css`
              margin-top: 17px;
              position: absolute;
              width: 505px;
              height: 369px;
              left: 800px;
              top: 550px;
              background: #1d1d1f;
              box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.25);
              border-radius: 15px;
              img {
                display: block;
                margin: 30px auto;
              }
            `}
          >
            <img src={MakerImg} />
          </div>
          <div
            onClick={() => alert('준비중입니다.')}
            css={css`
              margin-top: 17px;
              position: absolute;
              width: 505px;
              height: 369px;
              left: 1333px;
              top: 550px;
              background: #1d1d1f;
              box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.25);
              border-radius: 15px;
              img {
                display: block;
                margin: 30px auto;
              }
            `}
          >
            <img src={MakerImg} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const BeatMakerWrapper = css`
  margin-left: 185px;
  height: 100vh;
  top: 0;
  display: flex;
  p {
    position: absolute;
    width: 200px;
    height: 36px;
    left: 282px;
    top: 100px;
    font-size: 26px;
    line-height: 36px;
    color: #ffffff;
  }
`;

// const MakerItem = css`
//   margin-top: 17px;
//   position: absolute;
//   width: 505px;
//   height: 369px;
//   left: 267px;
//   top: 188px;
//   background: #1d1d1f;
//   box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.25);
//   border-radius: 15px;
//   img {
//     display: block;
//     margin: 30px auto;
//   }
// `;
