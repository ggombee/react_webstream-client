/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from '@emotion/styled';

import LogoImg from '../assets/Main/logo.png';
import HomeImg from '../assets/Main/home_off.png';
import HomeActImg from '../assets/Main/home_on.png';
import HotImg from '../assets/Main/hottrack_off.png';
import HotActImg from '../assets/Main/hottrack_on.png';

import BeatImg from '../assets/Main/beatmaker_off.png';
import BeatActImg from '../assets/Main/beatmaker_on.png';

import FavoriteImg from '../assets/Main/favorite_off.png';
import FavoriteActImg from '../assets/Main/favorite_on.png';

import PlaylistImg from '../assets/Main/playlist_off.png';
import PlaylistActImg from '../assets/Main/playlist_on.png';
import CartImg from '../assets/Main/cart_off.png';
import CartActImg from '../assets/Main/cart_on.png';
import { Header } from '../features/Main/Common/Header';

/*
 * 메인 레이아웃
 * 1. Menu
 *   1) Layout
 * 2. Header
 *   1) Layout
 * 3. Footer
 *   1) Layout
 * 2. Contents
 *   1) Layout
 */

interface IMainProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainProps) => {
  const history = useHistory();
  const [index, setIndex] = useState(0);

  const handleClickMenu = (url: string, index: number) => {
    setIndex(index);
    history.push({
      pathname: url,
    });
  };

  return (
    <div css={MainWrapper}>
      <div css={Sidebar}>
        <img css={Logo} src={LogoImg} />
        <div css={MenuWrapper}>
          <div css={MenuGroup}>
            LIBRARY
            <p
              css={MenuItem}
              onClick={() => handleClickMenu('/home', 0)}
              style={index === 0 ? { color: '#FFFFFF' } : { color: '#5E6266' }}
            >
              {index === 0 ? <img src={HomeActImg} /> : <img src={HomeImg} />}
              <span
                css={css`
                  margin-left: 19px;
                `}
              >
                Home
              </span>
            </p>
            <p
              css={MenuItem}
              onClick={() => handleClickMenu('/hottrack', 1)}
              style={index === 1 ? { color: '#FFFFFF' } : { color: '#5E6266' }}
            >
              {index === 1 ? <img src={HotActImg}></img> : <img src={HotImg}></img>}

              <span
                css={css`
                  margin-left: 19px;
                `}
              >
                Hot Track
              </span>
            </p>
          </div>
          <div css={MenuGroup}>
            My Music
            <p
              css={MenuItem}
              onClick={() => handleClickMenu('/beatmaker', 2)}
              style={index === 2 ? { color: '#FFFFFF' } : { color: '#5E6266' }}
            >
              {index === 2 ? <img src={BeatActImg}></img> : <img src={BeatImg}></img>}
              <span
                css={css`
                  margin-left: 19px;
                `}
              >
                Beat Maker
              </span>
            </p>
            <p
              css={MenuItem}
              onClick={() => handleClickMenu('/favorites', 3)}
              style={index === 3 ? { color: '#FFFFFF' } : { color: '#5E6266' }}
            >
              {index === 3 ? <img src={FavoriteActImg}></img> : <img src={FavoriteImg}></img>}
              <span
                css={css`
                  margin-left: 19px;
                `}
              >
                Favorites
              </span>
            </p>
            <p
              css={MenuItem}
              onClick={() => handleClickMenu('/playlist', 4)}
              style={index === 4 ? { color: '#FFFFFF' } : { color: '#5E6266' }}
            >
              {index === 4 ? <img src={PlaylistActImg}></img> : <img src={PlaylistImg}></img>}
              <span
                css={css`
                  margin-left: 19px;
                `}
              >
                Playlist
              </span>
            </p>
            <p
              css={MenuItem}
              onClick={() => handleClickMenu('/cart', 5)}
              style={index === 5 ? { color: '#FFFFFF' } : { color: '#5E6266' }}
            >
              {index === 5 ? <img src={CartActImg}></img> : <img src={CartImg}></img>}
              <span
                css={css`
                  margin-left: 19px;
                `}
              >
                Cart
              </span>
            </p>
          </div>
        </div>
      </div>
      <div css={Content}>
        <Header />
        {children}
      </div>
    </div>
  );
};

const MainWrapper = css`
  top: 0;
  bottom: 0;
  background: #000000;
`;

const Sidebar = css`
  overflow: auto;
  height: 100%;
  background: #080808;
  left: 0;
  top: 0;
  position: absolute;
  width: 185px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Content = css`
  overflow: initial;
  background: #000000;
`;

const Logo = css`
  position: absolute;
  width: 114.07px;
  height: 26.08px;
  left: 33px;
  top: 42px;
`;

const MenuWrapper = css`
  position: absolute;
  min-width: 0px;
  width: 110px;
  height: 389px;
  left: 38px;
  top: 188px;
`;

const MenuGroup = css`
  color: #5e6266;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 100px;
  img {
    vertical-align: middle;
  }
`;

const MenuItem = css`
  font-size: 16px;
  line-height: 22px;
  width: 150px;
  height: 23px;
  left: 38px;
  top: 234px;
  color: white;
`;
