import React from 'react'
import { css } from '@emotion/react'
import { RouteComponentProps } from 'react-router'
import MenuItem from './MenuItem'

import LogoImg from '~/assets/logo.png'
import HomeImg from '~/assets/icons/home_off.png'
import HomeActImg from '~/assets/icons/home_on.png'
import HotImg from '~/assets/icons/hottrack_off.png'
import HotActImg from '~/assets/icons/hottrack_on.png'
import BeatImg from '~/assets/icons/beatmaker_off.png'
import BeatActImg from '~/assets/icons/beatmaker_on.png'
import FavoriteImg from '~/assets/icons/favorite_off.png'
import FavoriteActImg from '~/assets/icons/favorite_on.png'
import PlaylistImg from '~/assets/icons/playlist_off.png'
import PlaylistActImg from '~/assets/icons/playlist_on.png'

const SideMenu = (props: RouteComponentProps) => {
  const pathName = props.location.pathname

  const clickMenu = (url: string) => {
    props.history.push({
      pathname: url,
    })
  }

  return (
    <div css={container}>
      <img css={logo} src={LogoImg} alt="logo" />
      <div css={menuWrapper}>
        <p css={title}>LIBRARY</p>
        <div css={menuItemWrapper} onClick={() => clickMenu('/')}>
          <MenuItem
            iconSrc={pathName === '/' ? HomeActImg : HomeImg}
            activate={pathName === '/'}
            menuName={'Home'}
          />
        </div>
        <div css={menuItemWrapper} onClick={() => clickMenu('/hottrack')}>
          <MenuItem
            iconSrc={pathName === '/hottrack' ? HotActImg : HotImg}
            activate={pathName === '/hottrack'}
            menuName={'Hot Track'}
          />
        </div>
      </div>
      <div css={menuWrapper}>
        <p css={title}>My Music</p>
        <div css={menuItemWrapper} onClick={() => clickMenu('/beat')}>
          <MenuItem
            iconSrc={pathName === '/beat' ? BeatActImg : BeatImg}
            activate={pathName === '/beat'}
            menuName={'Beat Maker'}
          />
        </div>
        <div css={menuItemWrapper} onClick={() => clickMenu('/favorites')}>
          <MenuItem
            iconSrc={pathName === '/favorites' ? FavoriteActImg : FavoriteImg}
            activate={pathName === '/favorites'}
            menuName={'Favorites'}
          />
        </div>
        <div css={menuItemWrapper} onClick={() => clickMenu('/playlist')}>
          <MenuItem
            iconSrc={pathName === '/playlist' ? PlaylistActImg : PlaylistImg}
            activate={pathName === '/playlist'}
            menuName={'Playlist'}
          />
        </div>
      </div>
    </div>
  )
}

export default SideMenu

const container = css`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #0C0C0D;
  width: 185px;
`

const menuWrapper = css`
  margin-top: 118px;
  margin-left: 38px;
`

const menuItemWrapper = css`
  cursor: pointer;
`

const title = css`
  color: #5e6266;
  font-size: 16px;
  line-height: 22px;
`

const logo = css`
  width: 114px;
  height: 26px;
  margin-top: 42px;
  margin-left: 33px;
`
