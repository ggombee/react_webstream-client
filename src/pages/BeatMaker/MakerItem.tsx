import React from 'react'
import { css } from '@emotion/react'

import { Maker } from 'data/dummy/DUMMY_MAKERS_DATA'
import TrackSmallCard from '~/components/TrackSmallCard'
import makerImg from 'assets/sample/maker.png'
import followOnIco from 'assets/icons/follow_on.png'
import followOffIco from 'assets/icons/follow_off.png'
import beatImg from 'assets/sample/beat1.png'
import beatImg2 from 'assets/sample/beat2.png'
import SelectPopup, { PopupItem } from '~/components/SelectPopup'

const MakerItem: React.FC<Maker> = (props: Maker) => {
  const [isFollowed, setIsFollowed] = React.useState(props.isFollowed)
  const [openSelectPopup, setOpenSelectPopup] = React.useState(false)

  const OPTIONS: PopupItem[] = [
    {
      key: 1,
      label: 'Comments',
      onClick: () => {
        setOpenSelectPopup(false)
      },
    },
    {
      key: 2,
      label: 'Share',
      onClick: () => {
        setOpenSelectPopup(false)
      },
    },
    {
      key: 3,
      label: 'Go To Track',
      onClick: () => {
        setOpenSelectPopup(false)
      },
    },
    {
      key: 4,
      label: 'Go To Artist',
      onClick: () => {
        setOpenSelectPopup(false)
      },
    },
  ]
  const handleToggleSelectPopup = () => {
    alert('준비중입니다.')
    setOpenSelectPopup((p) => !p)
  }

  return (
    <div css={container}>
      <div css={makerInfo}>
        <div css={image}>
          <img src={makerImg} alt="메이커 이미지" />
        </div>
        <div css={information}>
          <p
            css={css`
              font-size: 22px;
            `}
          >
            {props.makerName}
          </p>
          <div
            css={css`
              margin-top: 15px;
              color: #7e868d;
              font-size: 16px;
            `}
          >
            <span>Beats</span>
            <span
              css={css`
                margin-left: 10px;
                color: #ffffff;
              `}
            >
              {props.totalBeats}
            </span>
            <span
              css={css`
                margin-left: 31px;
              `}
            >
              Follower
            </span>
            <span
              css={css`
                margin-left: 10px;
                color: #ffffff;
              `}
            >
              {props.totalFollower}
            </span>
          </div>
          <div css={moodInfo}>
            {props.moodInfo.map((x) => {
              return (
                <div key={x.id} css={moodButton}>
                  {x.moodname}
                </div>
              )
            })}
          </div>
        </div>
        <div css={follow}>
          {isFollowed ? (
            <img src={followOnIco} onClick={() => setIsFollowed(false)} />
          ) : (
            <img src={followOffIco} onClick={() => setIsFollowed(true)} />
          )}
        </div>
      </div>
      <div css={beatInfo}>
        <span>Best Beat</span>
        {props.bestTrackInfo.map((x) => {
          return (
            <div css={beatItem}>
              <div css={thumbnail}>
                <img src={x.imgSrc === 'beat1' ? beatImg : beatImg2} />
              </div>
              <div css={musicInfo}>
                <span css={song}>{x.name}</span>
                <span css={singer}>{props.makerName}</span>
              </div>
              <div css={commonIcon}>
                {/* <SelectPopup
                  show={openSelectPopup}
                  setShow={setOpenSelectPopup}
                  items={OPTIONS}
                  css={popupContainer}
                /> */}
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
          )
        })}
      </div>
    </div>
  )
}

export default MakerItem

const container = css`
  width: 505px;
  height: 370px;
  display: flex;
  flex-direction: column;
  background: #151516;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding-left: 20px;
  padding-top: 25px;
  :hover {
    background: #1d1d1f;
  }
  &:not(:last-child) {
    margin-right: 43px;
    margin-bottom: 47px;
  }
`

const makerInfo = css`
  padding-left: 5px;
  width: 455px;
  height: 115px;
  margin-bottom: 39px;
  display: flex;
`

const image = css`
  width: 115px;
  height: 115px;
`

const information = css`
  padding-top: 15px;
  margin-left: 27px;
  color: white;
  display: flex;
  flex-direction: column;
`
const moodInfo = css`
  margin-top: 16px;
  display: flex;
  align-items: center;
`
const moodButton = css`
  border: 1px solid #a2a7ac;
  box-sizing: border-box;
  border-radius: 50px;
  height: 25px;
  line-height: 22px;
  font-size: 14px;
  padding: 0 11px;
  color: #a2a7ac;
  &:not(:last-child) {
    margin-right: 11px;
  }
`

const follow = css`
  margin-left: auto;
`

const beatInfo = css`
  color: white;
  font-size: 18px;
  span {
    margin-left: 15px;
  }
  width: 100%;
`

const beatItem = css`
  display: flex;
  margin-top: 7px;
  margin-right: 20px;
  padding : 8px;8px;8px;8px;
  border-radius: 10px;
  :hover {
    background: #151516;
  }

`
const musicInfo = css`
  margin-left: 10px;
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

const thumbnail = css`
  padding-left: 5px;
`

const icon = css`
  width: 4px;
  height: 14px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
  margin-left: auto;
  cursor: pointer;
`

const commonIcon = css`
  height: 14px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
  margin-left: auto;
  cursor: pointer;
`

const popupContainer = css`
  position: absolute;
  top: 25px;
  right: 0;
  z-index: 15;
`
