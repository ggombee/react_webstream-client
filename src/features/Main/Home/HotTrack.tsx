/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { useHistory } from 'react-router';

import ArrowIco from '../../../assets/Main/arrow_forward.png';
import SmallCardImg from '../../../assets/sample/small.png';
import FavoriteIcon from '../../../assets/Main/favorite_off.png';
import PlaylistAddIcon from '../../../assets/Main/playlist_add.png';
import DownloadIcon from '../../../assets/Main/download.png';
import { TrackData } from '../../../stores/Main/HotTrack/__mocks__/mockData';
import { HotTrackState } from '../../../stores/Main/HotTrack/types';

export const HotTrack = () => {
  const history = useHistory();

  return (
    <div css={HotTrackWrapper}>
      <span>
        Hot Track
        <button onClick={() => history.push({ pathname: '/hottrack' })}>
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
                <h1
                  css={css`
                    margin-left: 38px;
                    font-size: 20px;
                    line-height: 28px;
                    display: inline;
                    flex-direction: column;
                  `}
                >
                  {track.rank}
                </h1>
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
  width: 650px;
  height: 42px;
  left: 282px;
  top: 635px;

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

  img {
    vertical-align: middle;
    margin-left: 2px;
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
