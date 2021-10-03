import React from 'react'
import { css } from '@emotion/react'

import { DUMMY_TRACK_DATA, ITrack } from 'data/dummy/DUMMY_TRACK_DATA'

import sampleMedImage from 'assets/sample/medium.png';
import likeOffImg from 'assets/icons/favorite_off.png';
import likeOnImg from 'assets/icons/like.png';
import playListImg from 'assets/icons/playlist_add.png';
import cartOnImg from 'assets/icons/cart_on.png';
import cartOffImg from 'assets/icons/cart_off.png';
import SelectPopup, { PopupItem } from '~/components/SelectPopup';

const HotTrackItem: React.FC<ITrack> = (props: ITrack) => {
  const [isLike, setIsLike] = React.useState(props.isLiked)
  const [isCart, setIsCart] = React.useState(false)
  const [openSelectPopup, setOpenSelectPopup] = React.useState(false);
  const OPTIONS: PopupItem[] = [
    {
      key: 1,
      label: 'Comments',
      onClick: () => {
        setOpenSelectPopup(false);
      }
    },
    {
      key: 2,
      label: 'Share',
      onClick: () => {
        setOpenSelectPopup(false);
      }
    },
    {
      key: 3,
      label: 'Go To Track',
      onClick: () => {
        setOpenSelectPopup(false);
      }
    },
    {
      key: 4,
      label: 'Go To Artist',
      onClick: () => {
        setOpenSelectPopup(false);
      }
    },
  ]

  const handleOpenSelectPopup = () => {
    setOpenSelectPopup(true)
  }

  const handleCloseSelectPopup = () => {
    setOpenSelectPopup(false)
  }

  const handleToggleSelectPopup = () => {
    setOpenSelectPopup(p => !p)
  }

  const handlePrice = () => {
    setIsCart(isCart ? false : true)
    alert('준비중입니다.')
  }

  return (
    <>
      <div css={container}>
        <div css={trackContents}>
          <span css={ranking}>{props.id}</span>
          <div css={imgWrapper}>
            <img css={thumnail} src={sampleMedImage} alt="bts" />
          </div>
          <div css={musicInfo}>
            <span css={song}>{props.name}</span>
            <span css={singer}>{props.makerInfo.makername}</span>
          </div>
          <div css={moodInfo}>
            {props.mood.map((x) => {
              return (
                <div key={x.id}
                  css={moodButton}
                >
                  {x.moodname}
                </div>
              )
            })}
          </div>
          <div css={genreInfo}>
            <span>{props.genre}</span>
          </div>
          <div css={iconWrapper}>
            <div css={commonIcon}>
              {isLike ? (
                <img onClick={() => setIsLike(false)} src={likeOnImg} />
              ) : (
                <img onClick={() => setIsLike(true)} src={likeOffImg} />
              )}
            </div>
            <div css={commonIcon} onClick={() => alert('준비중입니다.')}>
              <img src={playListImg} />
            </div>
            <div css={commonIcon}>
              <div
                css={isCart ?
                  css`
                    background-color: #F6112D;  
                    border: 1px solid #F6112D;
                    border-radius: 8px;
                    color: #F6112D;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    img {
                      padding-right: 5px;
                    }
                  `
                  : priceButton}
                onClick={() => handlePrice()}
              >
                {isCart ? (
                  <div>
                    <img src={cartOnImg} />
                    <span css={css`
                      color: white;
                    `}>{props.price}원</span>
                  </div>
                ) : (
                  <div>
                    <img src={cartOffImg} />
                    <span>{props.price}원</span>
                  </div>
                )}
              </div>
            </div>
            <div css={commonIcon}>
              <SelectPopup show={openSelectPopup} setShow={setOpenSelectPopup} items={OPTIONS} css={popupContainer} />
              <button onClick={handleToggleSelectPopup}>
                <svg
                  width="4"
                  height="15"
                  viewBox="0 0 4 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="1.75" cy="1.75" r="1.75" fill="#5E6266" />
                  <circle cx="1.75" cy="7.19531" r="1.75" fill="#5E6266" />
                  <circle cx="1.75" cy="12.6387" r="1.75" fill="#5E6266" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotTrackItem

const container = css`
  display: flex;
`

const trackContents = css`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 15px;
  margin-right: 15px;
  width: 100%;
  border-radius: 10px;
  :hover {
    background: #141515;
  }
`

const thumnail = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const imgWrapper = css`
  width: 50px;
  height: 50px;
  overflow: hidden;
  // margin: 0 auto;
`
const ranking = css`
  width: 80px;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
`

const musicInfo = css`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`

const song = css`
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 3px;
`
const singer = css`
  font-size: 15px;
  line-height: 20px;
  color: #75767c;
`

const moodInfo = css`
  margin-left: 200px;
  display: flex;
  align-items: center;
  padding-top : 5px;
`

const genreInfo = css`
  margin-left: 200px;
  display: flex;
  align-items: center;
`

const iconWrapper = css`
  margin-left: auto;
  margin-right: 30px;
  display: flex;
  align-items: center;
`

const commonIcon = css`
  margin-left: 45px;
  cursor: pointer;
  position: relative;
`

const priceButton = css`
  border: 1px solid #F6112D;
  border-radius: 8px;
  color: #F6112D;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  img {
    padding-right: 5px;
  }
`

const moodButton = css`
  border: 1px solid #3E3F42;
  box-sizing: border-box;
  border-radius: 50px;
  height: 30px;
  line-height: 27px;
  padding: 0 15px;
  color: #3E3F42;
  &:not(:last-child) {
    margin-right: 5px;
  }
`

const popupContainer = css`
  position: absolute;
  top: 25px;
  right: 0;
  z-index: 15;
`