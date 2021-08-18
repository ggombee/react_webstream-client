/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { MainLayout } from '../../../Layout/main';
import SelectedTrack from '../../../assets/Main/track_selected.png';
import SmallCardImg from '../../../assets/sample/small.png';

import HappyIcon from '../../../assets/Main/happy.png';
import SexyIcon from '../../../assets/Main/sexy.png';
import FavoriteActiveIcon from '../../../assets/Main/favorite_on.png';
import FavoriteIcon from '../../../assets/Main/favorite_off.png';

import PlaylistIcon from '../../../assets/Main/playlist_add.png';
import PriceHoverIcon from '../../../assets/sample/price_hover.png';
import PriceIcon from '../../../assets/sample/price.png';
import MoreIcon from '../../../assets/Main/more_off.png';
import MoreActiveIcon from '../../../assets/Main/more_on.png';

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
          <div>
            <div css={TrackItem}>
              <div>
                <h1
                  css={css`
                    margin-left: 47px;
                    font-size: 20px;
                    line-height: 28px;
                    color: #ffffff;
                    margin-right: 31px;
                    align-item: center;
                    vertical-align: middle;
                  `}
                >
                  1
                </h1>
              </div>
              <div>
                <img
                  src={SmallCardImg}
                  css={css`
                    vertical-align: middle;
                  `}
                />
              </div>
              <div
                css={css`
                  margin-right: 150px;
                `}
              >
                <div
                  css={css`
                    display: block;
                    margin-left: 37px;
                    margin-top: 4px;
                    font-size: 18px;
                    line-height: 25px;
                    color: #ffffff;
                  `}
                >
                  No More
                  <div
                    css={css`
                      margin-top: 2px;
                      display: block;
                      font-size: 14px;
                      line-height: 20px;
                      color: #5e6266;
                    `}
                  >
                    Kely
                  </div>
                </div>
              </div>
              <div
                css={css`
                  margin-top: 15px;
                `}
              >
                <img
                  src={HappyIcon}
                  css={css`
                    margin-right: 15px;
                  `}
                />
                <img src={SexyIcon} />
              </div>
              <div
                css={css`
                  margin-top: 15px;
                  margin-left: 250px;
                  color: #ffffff;
                `}
              >
                Pop
              </div>
              <div
                css={css`
                  margin-top: 10px;
                  margin-left: auto;
                `}
              >
                <img
                  src={FavoriteIcon}
                  css={css`
                    width: 20px;
                    height: 21px;
                    margin: 0px 30px 3px 0px;
                  `}
                />
                <img
                  src={PlaylistIcon}
                  css={css`
                    width: 28px;
                    height: 28px;
                    margin: 4px 30px 0px 0px;
                  `}
                />
                <img
                  src={PriceHoverIcon}
                  css={css`
                    margin: 2px 30px 0px 0px;
                  `}
                />
                <img
                  src={MoreIcon}
                  css={css`
                    margin: 2px 15px 5px 0px;
                  `}
                />
              </div>
            </div>
            <div css={TrackItem}>
              <div>
                <h1
                  css={css`
                    margin-left: 47px;
                    font-size: 20px;
                    line-height: 28px;
                    color: #ffffff;
                    margin-right: 31px;
                    align-item: center;
                    vertical-align: middle;
                  `}
                >
                  2
                </h1>
              </div>
              <div>
                <img
                  src={SmallCardImg}
                  css={css`
                    vertical-align: middle;
                  `}
                />
              </div>
              <div
                css={css`
                  margin-right: 150px;
                `}
              >
                <div
                  css={css`
                    display: block;
                    margin-left: 37px;
                    margin-top: 4px;
                    font-size: 18px;
                    line-height: 25px;
                    color: #ffffff;
                  `}
                >
                  No More
                  <div
                    css={css`
                      margin-top: 2px;
                      display: block;
                      font-size: 14px;
                      line-height: 20px;
                      color: #5e6266;
                    `}
                  >
                    Kely
                  </div>
                </div>
              </div>
              <div
                css={css`
                  margin-top: 15px;
                `}
              >
                <img
                  src={HappyIcon}
                  css={css`
                    margin-right: 15px;
                  `}
                />
                <img src={SexyIcon} />
              </div>
              <div
                css={css`
                  margin-top: 15px;
                  margin-left: 250px;
                  color: #ffffff;
                `}
              >
                Pop
              </div>
              <div
                css={css`
                  margin-top: 10px;
                  margin-left: auto;
                `}
              >
                <img
                  src={FavoriteActiveIcon}
                  css={css`
                    width: 20px;
                    height: 21px;
                    margin: 0px 30px 3px 0px;
                  `}
                />
                <img
                  src={PlaylistIcon}
                  css={css`
                    width: 28px;
                    height: 28px;
                    margin: 4px 30px 0px 0px;
                  `}
                />
                <img
                  src={PriceHoverIcon}
                  css={css`
                    margin: 2px 30px 0px 0px;
                  `}
                />
                <img
                  src={MoreIcon}
                  css={css`
                    margin: 2px 15px 5px 0px;
                  `}
                />
              </div>
            </div>
            <div css={TrackItem}>
              <div>
                <h1
                  css={css`
                    margin-left: 47px;
                    font-size: 20px;
                    line-height: 28px;
                    color: #ffffff;
                    margin-right: 31px;
                    align-item: center;
                    vertical-align: middle;
                  `}
                >
                  3
                </h1>
              </div>
              <div>
                <img
                  src={SmallCardImg}
                  css={css`
                    vertical-align: middle;
                  `}
                />
              </div>
              <div
                css={css`
                  margin-right: 150px;
                `}
              >
                <div
                  css={css`
                    display: block;
                    margin-left: 37px;
                    margin-top: 4px;
                    font-size: 18px;
                    line-height: 25px;
                    color: #ffffff;
                  `}
                >
                  No More
                  <div
                    css={css`
                      margin-top: 2px;
                      display: block;
                      font-size: 14px;
                      line-height: 20px;
                      color: #5e6266;
                    `}
                  >
                    Kely
                  </div>
                </div>
              </div>
              <div
                css={css`
                  margin-top: 15px;
                `}
              >
                <img
                  src={HappyIcon}
                  css={css`
                    margin-right: 15px;
                  `}
                />
                <img src={SexyIcon} />
              </div>
              <div
                css={css`
                  margin-top: 15px;
                  margin-left: 250px;
                  color: #ffffff;
                `}
              >
                Pop
              </div>
              <div
                css={css`
                  margin-top: 10px;
                  margin-left: auto;
                `}
              >
                <img
                  src={FavoriteIcon}
                  css={css`
                    width: 20px;
                    height: 21px;
                    margin: 0px 30px 3px 0px;
                  `}
                />
                <img
                  src={PlaylistIcon}
                  css={css`
                    width: 28px;
                    height: 28px;
                    margin: 4px 30px 0px 0px;
                  `}
                />
                <img
                  src={PriceHoverIcon}
                  css={css`
                    margin: 2px 30px 0px 0px;
                  `}
                />
                <img
                  src={MoreIcon}
                  css={css`
                    margin: 2px 15px 5px 0px;
                  `}
                />
              </div>
            </div>
            <div css={TrackItem}>
              <div>
                <h1
                  css={css`
                    margin-left: 47px;
                    font-size: 20px;
                    line-height: 28px;
                    color: #ffffff;
                    margin-right: 31px;
                    align-item: center;
                    vertical-align: middle;
                  `}
                >
                  4
                </h1>
              </div>
              <div>
                <img
                  src={SmallCardImg}
                  css={css`
                    vertical-align: middle;
                  `}
                />
              </div>
              <div
                css={css`
                  margin-right: 150px;
                `}
              >
                <div
                  css={css`
                    display: block;
                    margin-left: 37px;
                    margin-top: 4px;
                    font-size: 18px;
                    line-height: 25px;
                    color: #ffffff;
                  `}
                >
                  No More
                  <div
                    css={css`
                      margin-top: 2px;
                      display: block;
                      font-size: 14px;
                      line-height: 20px;
                      color: #5e6266;
                    `}
                  >
                    Kely
                  </div>
                </div>
              </div>
              <div
                css={css`
                  margin-top: 15px;
                `}
              >
                <img
                  src={HappyIcon}
                  css={css`
                    margin-right: 15px;
                  `}
                />
                <img src={SexyIcon} />
              </div>
              <div
                css={css`
                  margin-top: 15px;
                  margin-left: 250px;
                  color: #ffffff;
                `}
              >
                Pop
              </div>
              <div
                css={css`
                  margin-top: 10px;
                  margin-left: auto;
                `}
              >
                <img
                  src={FavoriteIcon}
                  css={css`
                    width: 20px;
                    height: 21px;
                    margin: 0px 30px 3px 0px;
                  `}
                />
                <img
                  src={PlaylistIcon}
                  css={css`
                    width: 28px;
                    height: 28px;
                    margin: 4px 30px 0px 0px;
                  `}
                />
                <img
                  src={PriceHoverIcon}
                  css={css`
                    margin: 2px 30px 0px 0px;
                  `}
                />
                <img
                  src={MoreIcon}
                  css={css`
                    margin: 2px 15px 5px 0px;
                  `}
                />
              </div>
            </div>
            <div css={TrackItem}>
              <div>
                <h1
                  css={css`
                    margin-left: 47px;
                    font-size: 20px;
                    line-height: 28px;
                    color: #ffffff;
                    margin-right: 31px;
                    align-item: center;
                    vertical-align: middle;
                  `}
                >
                  5
                </h1>
              </div>
              <div>
                <img
                  src={SmallCardImg}
                  css={css`
                    vertical-align: middle;
                  `}
                />
              </div>
              <div
                css={css`
                  margin-right: 150px;
                `}
              >
                <div
                  css={css`
                    display: block;
                    margin-left: 37px;
                    margin-top: 4px;
                    font-size: 18px;
                    line-height: 25px;
                    color: #ffffff;
                  `}
                >
                  No More
                  <div
                    css={css`
                      margin-top: 2px;
                      display: block;
                      font-size: 14px;
                      line-height: 20px;
                      color: #5e6266;
                    `}
                  >
                    Kely
                  </div>
                </div>
              </div>
              <div
                css={css`
                  margin-top: 15px;
                `}
              >
                <img
                  src={HappyIcon}
                  css={css`
                    margin-right: 15px;
                  `}
                />
                <img src={SexyIcon} />
              </div>
              <div
                css={css`
                  margin-top: 15px;
                  margin-left: 250px;
                  color: #ffffff;
                `}
              >
                Pop
              </div>
              <div
                css={css`
                  margin-top: 10px;
                  margin-left: auto;
                `}
              >
                <img
                  src={FavoriteIcon}
                  css={css`
                    width: 20px;
                    height: 21px;
                    margin: 0px 30px 3px 0px;
                  `}
                />
                <img
                  src={PlaylistIcon}
                  css={css`
                    width: 28px;
                    height: 28px;
                    margin: 4px 30px 0px 0px;
                  `}
                />
                <img
                  src={PriceHoverIcon}
                  css={css`
                    margin: 2px 30px 0px 0px;
                  `}
                />
                <img
                  src={MoreIcon}
                  css={css`
                    margin: 2px 15px 5px 0px;
                  `}
                />
              </div>
            </div>
            <div css={TrackItem}>
              <div>
                <h1
                  css={css`
                    margin-left: 47px;
                    font-size: 20px;
                    line-height: 28px;
                    color: #ffffff;
                    margin-right: 31px;
                    align-item: center;
                    vertical-align: middle;
                  `}
                >
                  6
                </h1>
              </div>
              <div>
                <img
                  src={SmallCardImg}
                  css={css`
                    vertical-align: middle;
                  `}
                />
              </div>
              <div
                css={css`
                  margin-right: 150px;
                `}
              >
                <div
                  css={css`
                    display: block;
                    margin-left: 37px;
                    margin-top: 4px;
                    font-size: 18px;
                    line-height: 25px;
                    color: #ffffff;
                  `}
                >
                  No More
                  <div
                    css={css`
                      margin-top: 2px;
                      display: block;
                      font-size: 14px;
                      line-height: 20px;
                      color: #5e6266;
                    `}
                  >
                    Kely
                  </div>
                </div>
              </div>
              <div
                css={css`
                  margin-top: 15px;
                `}
              >
                <img
                  src={HappyIcon}
                  css={css`
                    margin-right: 15px;
                  `}
                />
                <img src={SexyIcon} />
              </div>
              <div
                css={css`
                  margin-top: 15px;
                  margin-left: 250px;
                  color: #ffffff;
                `}
              >
                Pop
              </div>
              <div
                css={css`
                  margin-top: 10px;
                  margin-left: auto;
                `}
              >
                <img
                  src={FavoriteIcon}
                  css={css`
                    width: 20px;
                    height: 21px;
                    margin: 0px 30px 3px 0px;
                  `}
                />
                <img
                  src={PlaylistIcon}
                  css={css`
                    width: 28px;
                    height: 28px;
                    margin: 4px 30px 0px 0px;
                  `}
                />
                <img
                  src={PriceHoverIcon}
                  css={css`
                    margin: 2px 30px 0px 0px;
                  `}
                />
                <img
                  src={MoreIcon}
                  css={css`
                    margin: 2px 15px 5px 0px;
                  `}
                />
              </div>
            </div>
            <div css={TrackItem}>
              <div>
                <h1
                  css={css`
                    margin-left: 47px;
                    font-size: 20px;
                    line-height: 28px;
                    color: #ffffff;
                    margin-right: 31px;
                    align-item: center;
                    vertical-align: middle;
                  `}
                >
                  7
                </h1>
              </div>
              <div>
                <img
                  src={SmallCardImg}
                  css={css`
                    vertical-align: middle;
                  `}
                />
              </div>
              <div
                css={css`
                  margin-right: 150px;
                `}
              >
                <div
                  css={css`
                    display: block;
                    margin-left: 37px;
                    margin-top: 4px;
                    font-size: 18px;
                    line-height: 25px;
                    color: #ffffff;
                  `}
                >
                  No More
                  <div
                    css={css`
                      margin-top: 2px;
                      display: block;
                      font-size: 14px;
                      line-height: 20px;
                      color: #5e6266;
                    `}
                  >
                    Kely
                  </div>
                </div>
              </div>
              <div
                css={css`
                  margin-top: 15px;
                `}
              >
                <img
                  src={HappyIcon}
                  css={css`
                    margin-right: 15px;
                  `}
                />
                <img src={SexyIcon} />
              </div>
              <div
                css={css`
                  margin-top: 15px;
                  margin-left: 250px;
                  color: #ffffff;
                `}
              >
                Pop
              </div>
              <div
                css={css`
                  margin-top: 10px;
                  margin-left: auto;
                `}
              >
                <img
                  src={FavoriteIcon}
                  css={css`
                    width: 20px;
                    height: 21px;
                    margin: 0px 30px 3px 0px;
                  `}
                />
                <img
                  src={PlaylistIcon}
                  css={css`
                    width: 28px;
                    height: 28px;
                    margin: 4px 30px 0px 0px;
                  `}
                />
                <img
                  src={PriceHoverIcon}
                  css={css`
                    margin: 2px 30px 0px 0px;
                  `}
                />
                <img
                  src={MoreIcon}
                  css={css`
                    margin: 2px 15px 5px 0px;
                  `}
                />
              </div>
            </div>
            <div css={TrackItem}>
              <div>
                <h1
                  css={css`
                    margin-left: 47px;
                    font-size: 20px;
                    line-height: 28px;
                    color: #ffffff;
                    margin-right: 31px;
                    align-item: center;
                    vertical-align: middle;
                  `}
                >
                  8
                </h1>
              </div>
              <div>
                <img
                  src={SmallCardImg}
                  css={css`
                    vertical-align: middle;
                  `}
                />
              </div>
              <div
                css={css`
                  margin-right: 150px;
                `}
              >
                <div
                  css={css`
                    display: block;
                    margin-left: 37px;
                    margin-top: 4px;
                    font-size: 18px;
                    line-height: 25px;
                    color: #ffffff;
                  `}
                >
                  No More
                  <div
                    css={css`
                      margin-top: 2px;
                      display: block;
                      font-size: 14px;
                      line-height: 20px;
                      color: #5e6266;
                    `}
                  >
                    Kely
                  </div>
                </div>
              </div>
              <div
                css={css`
                  margin-top: 15px;
                `}
              >
                <img
                  src={HappyIcon}
                  css={css`
                    margin-right: 15px;
                  `}
                />
                <img src={SexyIcon} />
              </div>
              <div
                css={css`
                  margin-top: 15px;
                  margin-left: 250px;
                  color: #ffffff;
                `}
              >
                Pop
              </div>
              <div
                css={css`
                  margin-top: 10px;
                  margin-left: auto;
                `}
              >
                <img
                  src={FavoriteIcon}
                  css={css`
                    width: 20px;
                    height: 21px;
                    margin: 0px 30px 3px 0px;
                  `}
                />
                <img
                  src={PlaylistIcon}
                  css={css`
                    width: 28px;
                    height: 28px;
                    margin: 4px 30px 0px 0px;
                  `}
                />
                <img
                  src={PriceHoverIcon}
                  css={css`
                    margin: 2px 30px 0px 0px;
                  `}
                />
                <img
                  src={MoreIcon}
                  css={css`
                    margin: 2px 15px 5px 0px;
                  `}
                />
              </div>
            </div>
            <div css={TrackItem}>
              <div>
                <h1
                  css={css`
                    margin-left: 47px;
                    font-size: 20px;
                    line-height: 28px;
                    color: #ffffff;
                    margin-right: 31px;
                    align-item: center;
                    vertical-align: middle;
                  `}
                >
                  9
                </h1>
              </div>
              <div>
                <img
                  src={SmallCardImg}
                  css={css`
                    vertical-align: middle;
                  `}
                />
              </div>
              <div
                css={css`
                  margin-right: 150px;
                `}
              >
                <div
                  css={css`
                    display: block;
                    margin-left: 37px;
                    margin-top: 4px;
                    font-size: 18px;
                    line-height: 25px;
                    color: #ffffff;
                  `}
                >
                  No More
                  <div
                    css={css`
                      margin-top: 2px;
                      display: block;
                      font-size: 14px;
                      line-height: 20px;
                      color: #5e6266;
                    `}
                  >
                    Kely
                  </div>
                </div>
              </div>
              <div
                css={css`
                  margin-top: 15px;
                `}
              >
                <img
                  src={HappyIcon}
                  css={css`
                    margin-right: 15px;
                  `}
                />
                <img src={SexyIcon} />
              </div>
              <div
                css={css`
                  margin-top: 15px;
                  margin-left: 250px;
                  color: #ffffff;
                `}
              >
                Pop
              </div>
              <div
                css={css`
                  margin-top: 10px;
                  margin-left: auto;
                `}
              >
                <img
                  src={FavoriteIcon}
                  css={css`
                    width: 20px;
                    height: 21px;
                    margin: 0px 30px 3px 0px;
                  `}
                />
                <img
                  src={PlaylistIcon}
                  css={css`
                    width: 28px;
                    height: 28px;
                    margin: 4px 30px 0px 0px;
                  `}
                />
                <img
                  src={PriceHoverIcon}
                  css={css`
                    margin: 2px 30px 0px 0px;
                  `}
                />
                <img
                  src={MoreIcon}
                  css={css`
                    margin: 2px 15px 5px 0px;
                  `}
                />
              </div>
            </div>
          </div>
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
  height: 650px;
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
  display: flex;
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
