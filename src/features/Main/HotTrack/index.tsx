/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { MainLayout } from '../../../Layout/main';
import SelectedTrack from '../../../assets/Main/track_selected.png';

export const HotTrack = () => {
  return (
    <MainLayout>
      <div css={HotTrackWrapper}>
        <p>Hot Track</p>
        {/* <div css={CategoryButton}>
          <div>
            <button
              css={css`
                color: #ffffff;
              `}
            >
              Popularity
            </button>
          </div>
          <div>
            <button
              css={css`
                color: #5e6266;
              `}
            >
              Genre
            </button>
          </div>
          <div>
            <button
              css={css`
                color: #5e6266;
              `}
            >
              Theme
            </button>
          </div>
        </div> */}
        <div css={TrackListWrapper}>
          <div css={TrackListCategory}>
            <div>
              <span
                css={css`
                  margin-right: 70px;
                  width: 35px;
                  display: block;
                  color: #ffffff;
                `}
              >
                Rank
              </span>
              <img
                src={SelectedTrack}
                css={css`
                  display: block;
                `}
              />
            </div>
            <span
              css={css`
                margin-right: 70px;
                width: 82px;
                color: #5e6266;
              `}
            >
              Lots of bits
            </span>
            <span
              css={css`
                margin-right: 70px;
                width: 74px;
                color: #5e6266;
              `}
            >
              Popularity
            </span>
            <span
              css={css`
                margin-right: 70px;
                width: 75px;
                color: #5e6266;
              `}
            >
              Download
            </span>
          </div>
          <div css={TrackItem}></div>
        </div>
      </div>
    </MainLayout>
  );
};

const HotTrackWrapper = css`
  margin-left: 185px;
  height: 100vh;
  top: 0;
  display: flex;
  p {
    position: absolute;
    width: 145px;
    height: 45px;
    left: 257px;
    top: 131px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #ffffff;
  }
  button {
    border: none;
    background: #000000;
    position: absolute;
    width: 82px;
    height: 24px;
    left: 452px;
    top: 143px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;

const CategoryButton = css`
  height: 24px;
  left: 452px;
  top: 143px;
  display: flex;
  width: 650px;
  margin-top: 22px;
`;

const TrackListWrapper = css`
  margin-top: 30px;
  position: absolute;
  width: 1591px;
  height: 700px;
  left: 257px;
  top: 206px;

  background: #0c0c0d;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

const TrackListCategory = css`
  margin-right: 35px;
  margin-left: 47px;
  margin-top: 20px;
  margin-bottom: 37px;

  display: flex;
  width: 600px;
  height: 22px;
  left: 304px;
  top: 252px;
  font-size: 16px;
  line-height: 22px;
`;

const TrackItem = css`
  margin-left: 14px;
  width: 1563px;
  height: 62px;
  left: 271px;
  top: 320px;

  background: #0c0c0d;
  border-radius: 10px;

  :hover {
    background: #141515;
  }
`;
