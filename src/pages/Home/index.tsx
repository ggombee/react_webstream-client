import React from 'react'
import { css } from '@emotion/react'
import EventCard, { IEventCard } from '~/components/EventCard'
import TrackSmallCard, { ITrackSmallCard } from '~/components/TrackSmallCard'
import BeatMakerCard, { IBeatMakerCard } from '~/components/BeatMakerCard'

import Event_1 from '~/assets/sample/event1.png'
import Event_2 from '~/assets/sample/event2.png'
import Event_3 from '~/assets/sample/event3.png'

import BTS from '~/assets/sample/bts_1.png'
import STAY from '~/assets/sample/stay.png'
import KISSMEMORE from '~/assets/sample/KissMeMore.png'
import LEVITATING from '~/assets/sample/Levitating.png'

import BeatMaker_1 from '~/assets/sample/beatMaker_01.png'
import BeatMaker_2 from '~/assets/sample/beatMaker_02.png'
import BeatMaker_3 from '~/assets/sample/beatMaker_03.png'
import BeatMaker_4 from '~/assets/sample/beatMaker_04.png'

const eventList: IEventCard[] = [
  {
    imgSrc: Event_1,
    title: 'Hot 100 of the Month Summary',
    caption: '6/12 ~ 7/10 Track',
  },
  {
    imgSrc: Event_2,
    title: 'Out Now',
    caption: 'BILLBOARD KOREA MAGAZINE vol.5',
  },
  {
    imgSrc: Event_3,
    title: 'Most TOP 10 Song',
    caption: 'K-pop First Half settlement',
  },
  {
    imgSrc: Event_1,
    title: 'Vision drawn by BM of KARD',
    caption: 'Beato News',
  },
]

const hotTrackList: ITrackSmallCard[] = [
  {
    song: 'Permission To Dance',
    singer: 'BTS',
    coverSrc: BTS,
    ranking: 1,
  },
  {
    song: 'Stay',
    singer: 'The Kid LAROI & Justin Bieber',
    coverSrc: STAY,
    ranking: 2,
  },
  {
    song: 'Levitating',
    singer: 'Dua Lipa Featuring DaBaby',
    coverSrc: LEVITATING,
    ranking: 3,
  },
  {
    song: 'Kiss Me More',
    singer: 'Doja Cat Featuring SZA',
    coverSrc: KISSMEMORE,
    ranking: 4,
  },
]

const beatMakerList: IBeatMakerCard[] = [
  {
    imgSrc: BeatMaker_1,
    producer: 'Deed',
    followerNum: 0,
    isFollow: false,
    isFavorite: false,
  },
  {
    imgSrc: BeatMaker_2,
    producer: 'JX',
    followerNum: 0,
    isFollow: false,
    isFavorite: false,
  },
  {
    imgSrc: BeatMaker_3,
    producer: 'SOGIMURA',
    followerNum: 0,
    isFollow: false,
    isFavorite: false,
  },
  {
    imgSrc: BeatMaker_1,
    producer: 'Anywaywell',
    followerNum: 0,
    isFollow: false,
    isFavorite: false,
  },
]

const Home = () => {
  return (
    <div css={Container}>
      <div css={eventWrapper}>
        <div css={eventHeader}>
          <p css={title}>Event</p>
        </div>
        <div css={content}>
          {eventList.map((props: IEventCard, idx) => (
            <EventCard key={idx} {...props} />
          ))}
        </div>
      </div>
      <div css={musicWrapper}>
        <div css={trackWrapper}>
          <div css={hotTrackHeader}>
            <p css={title}>Hot Track</p>
            <div css={moreButtonWrapper}>
              <span css={moreText}>More</span>
              <div css={moreButton}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.30495 12.2553C4.59079 12.5411 5.05162 12.5411 5.33745 12.2553L10.185 7.40781C10.4125 7.18031 10.4125 6.81281 10.185 6.58531L5.33745 1.73781C5.05162 1.45198 4.59079 1.45198 4.30495 1.73781C4.01912 2.02365 4.01912 2.48448 4.30495 2.77031L8.52829 6.99948L4.29912 11.2286C4.01912 11.5086 4.01912 11.9753 4.30495 12.2553Z"
                    fill="#5E6266"
                  />
                </svg>
              </div>
            </div>
          </div>

          {hotTrackList.map((props, idx) => (
            <TrackSmallCard key={idx} {...props} />
          ))}
        </div>
        <div css={beatWrapper}>
          <div css={beatMakerHeader}>
            <p css={title}>Beat Maker</p>
          </div>
          <div css={content}>
            {beatMakerList.map((props, idx) => (
              <BeatMakerCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

const Container = css`
  overflow: auto;
  background-color: transparent;
  color: white;
`

const eventWrapper = css`
  padding-left: 13px;
  padding-top: 20px;
  margin-bottom: 80px;
`

const eventHeader = css`
  margin-bottom: 20px;
`

const content = css`
  margin: 0 auto;
  white-space: nowrap;
  overflow-x: auto;
  text-align: center;
  ::-webkit-scrollbar {
    display: none;
  }
`

const musicWrapper = css`
  margin-bottom: 50px;
`

const trackWrapper = css`
  display: inline-block;
  vertical-align: top;
  width: 50%;
  padding-right: 75px;
`

const hotTrackHeader = css`
  margin-bottom: 30px;
  display: inline-flex;
  align-items: center;
  width: 100%;
`

const moreButtonWrapper = css`
  margin-left: auto;
  text-align: center;
  display: inline-flex;
  align-items: center;
`

const moreText = css`
  width: 38px;
  height: 22px;
  margin-top: 4px;
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #5e6266;
`

const moreButton = css`
  width: 14px;
  height: 14px;
  margin-left: 10px;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
`

const beatWrapper = css`
  display: inline-block;
  vertical-align: top;
  width: 50%;
  padding-left: 75px;
`

const beatMakerHeader = css`
  margin-bottom: 30px;
`

const title = css`
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 36px;
  color: #ffffff;
`
