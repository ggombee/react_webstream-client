/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Layout, Menu } from 'antd';
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
              style={index === 0 ? { color: 'red' } : { color: 'white' }}
            >
              {index === 0 ? <MenuImg src={HomeActImg}></MenuImg> : <MenuImg src={HomeImg}></MenuImg>}
              Home
            </p>
            <p
              css={MenuItem}
              onClick={() => handleClickMenu('/hottrack', 1)}
              style={index === 1 ? { color: 'red' } : { color: 'white' }}
            >
              {index === 1 ? <MenuImg src={HotActImg}></MenuImg> : <MenuImg src={HotImg}></MenuImg>}
              Hot Track
            </p>
          </div>
          <div css={MenuGroup}>
            My Music
            <p
              css={MenuItem}
              onClick={() => handleClickMenu('/beatmaker', 2)}
              style={index === 2 ? { color: 'red' } : { color: 'white' }}
            >
              {index === 2 ? <MenuImg src={BeatActImg}></MenuImg> : <MenuImg src={BeatImg}></MenuImg>}
              Beat Maker
            </p>
            <p
              css={MenuItem}
              onClick={() => handleClickMenu('/favorites', 3)}
              style={index === 3 ? { color: 'red' } : { color: 'white' }}
            >
              {index === 3 ? <MenuImg src={FavoriteActImg}></MenuImg> : <MenuImg src={FavoriteImg}></MenuImg>}
              Favorites
            </p>
            <p
              css={MenuItem}
              onClick={() => handleClickMenu('/playlist', 4)}
              style={index === 4 ? { color: 'red' } : { color: 'white' }}
            >
              {index === 4 ? <MenuImg src={PlaylistActImg}></MenuImg> : <MenuImg src={PlaylistImg}></MenuImg>}
              Playlist
            </p>
          </div>
        </div>
      </div>
      <Content>{children}</Content>
    </div>
  );
};

// <Layout>

// <Layout>
//   <StyledHeader>Beato</StyledHeader>
//   <StyledContent>{children}</StyledContent>
//   {/* <Footer style={{ textAlign: 'center' }}>My Home ©2020 Created by Electric-burglar</Footer> */}
// </Layout>
// </Layout>

const MainWrapper = css`
  top: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(99, 99, 99, 0) -34.44%, #0d0d0d 42.61%, #000000 100%);
`;

const Sidebar = css`
  overflow: auto;
  height: 100vh;
  background: black;
  left: 0;
  top: 0;
  position: absolute;
  width: 185px;
  left: 0px;
  top: 0px;
  ::-webkit-scrollbar {
    display: none;
  }
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

const MenuImg = styled.img`
  margin-right: 10px;
  margin-top: 10px;
`;

const Content = styled.div`
  height: 100vh;
  overflow: initial;
  background: linear-gradient(180deg, rgba(99, 99, 99, 0) -34.44%, #0d0d0d 42.61%, #000000 100%);
`;
