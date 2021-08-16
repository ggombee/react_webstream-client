/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import ArrowIco from '../../../assets/Main/arrow_forward.png';
import SmallCardImg from '../../../assets/sample/small.png';
import FavoriteIcon from '../../../assets/Main/favorite_off.png';
import PlaylistAddIcon from '../../../assets/Main/playlist_add.png';
import DownloadIcon from '../../../assets/Main/download.png';
import { TrackData } from '../../../stores/Main/HotTrack/__mocks__/mockData';
import { HotTrackState } from '../../../stores/Main/HotTrack/types';

export const HotTrack = () => {
  return (
    <div css={HotTrackWrapper}>
      <span>
        Hot Track
        <button>
          More
          <img src={ArrowIco} />
        </button>
      </span>

      {TrackData.map((track: HotTrackState) => {
        return (
          <div css={TrackItem} key={track.rank}>
            <div>
              <img src={SmallCardImg} />
            </div>

            <div>
              <span>
                <p
                  css={css`
                    margin-left: 38px;
                    font-size: 20px;
                    line-height: 28px;
                  `}
                >
                  {track.rank}
                </p>
              </span>
            </div>
            <div>
              <div
                css={css`
                  display: block;
                  margin-left: 37px;
                  font-size: 20px;
                  line-height: 28px;
                `}
              >
                {track.title}
                <div
                  css={css`
                    margin-top: 2px;
                    display: block;
                    font-size: 16px;
                    line-height: 21px;
                    color: #75767c;
                  `}
                >
                  {track.maker}
                </div>
              </div>
            </div>
            <div
              css={css`
                margin-left: auto;
                float: right;
                margin-top: 10px;
              `}
            >
              <img
                src={FavoriteIcon}
                css={css`
                  margin-left: 24px;
                `}
              />
              <img
                src={PlaylistAddIcon}
                css={css`
                  margin-left: 24px;
                `}
              />
              <img
                src={DownloadIcon}
                css={css`
                  margin-left: 24px;
                `}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const HotTrackWrapper = css`
  position: absolute;
  width: 60.4vh;
  height: 42px;
  left: 282px;
  top: 646px;

  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 36px;
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
`;

const TrackItem = css`
  display: flex;
  margin-top: 22px;
  width: 650px;
  height: 60px;
  left: 319px;
  top: 725px;
  img {
    vertical-align: middle;
  }
`;
