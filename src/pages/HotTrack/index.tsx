import React from 'react'
import { css } from '@emotion/react'
import { DUMMY_TRACK_DATA } from 'data/dummy/DUMMY_TRACK_DATA'
import sampleMedImage  from 'assets/sample/medium.png';
import HotTrackItem from './HotTrackItem';

const HotTrack = () => {
  const [category, setCategory] = React.useState('popularity')
  const [subCategory, setSubCategory] = React.useState('rank')

  return (
    <div css={Container}>
      <div css={hotTrackWrapper}>
        <div css={titleWrapper}>
          <p css={title}>Hot Track</p>
          <button value={'popularity'} style={{ color: category === 'popularity' ? '#ffffff' : '#5e6266' }} onClick={() => setCategory('popularity')}>Popularity</button>
          <button value={'genre'} style={{ color: category === 'genre' ? '#ffffff' : '#5e6266' }} onClick={() => setCategory('genre')}>Genre</button>
          <button value={'theme'} style={{ color: category === 'theme' ? '#ffffff' : '#5e6266' }} onClick={() => setCategory('theme')}>Theme</button>
        </div>
        <div css={content}>
          <div css={buttonWrapper}>
            <button value={'rank'}
              style={{
                color: subCategory === 'rank' ? '#ffffff' : '#5e6266',
                borderBottom: subCategory === 'rank' ? 'solid 2px red' : ''
              }}
              onClick={() => setSubCategory('rank')}
            >Rank</button>
            <button value={'bits'}
              style={{
                color: subCategory === 'bits' ? '#ffffff' : '#5e6266',
                borderBottom: subCategory === 'bits' ? 'solid 2px red' : ''
              }}
              onClick={() => setSubCategory('bits')}
            >Lots of bits</button>
            <button value={'popularity2'}
              style={{
                color: subCategory === 'popularity2' ? '#ffffff' : '#5e6266',
                borderBottom: subCategory === 'popularity2' ? 'solid 2px red' : ''
              }}
              onClick={() => setSubCategory('popularity2')}
            >Popularity</button>
            <button value={'download'}
              style={{
                color: subCategory === 'download' ? '#ffffff' : '#5e6266',
                borderBottom: subCategory === 'download' ? 'solid 2px red' : ''
              }}
              onClick={() => setSubCategory('download')}
            >Download</button>
          </div>
          <div css={tableWrapper}>
              {DUMMY_TRACK_DATA.map((x) => {
                return (
                  <HotTrackItem  key={x.id} {...x}/>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

const Container = css`
  display: flex;
  flex: 1;
  overflow: auto;
`

const hotTrackWrapper = css`
  padding-left: 13px;
  width: 100%;
`

const titleWrapper = css`
  display: flex;
  align-items: center;
  button {
    background-color: transparent;
    font-size: 15px;
    line-height: 36px;
    color: #ffffff;
    border: none;
    margin-left: 40px;
    text-align: center;
  }
`

const title = css`
  font-size: 26px;
  line-height: 36px;
  color: #ffffff;
`

const content = css`
  width: 100%; 
  background: #0C0C0D;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin-top: 30px;
`

const buttonWrapper = css`
  padding-left: 45px;
  padding-top: 45px;
  color: white;
  margin-bottom: 50px;
  button {
    font-size: 16px;
    line-height: 36px;
    border: transparent;
    background-color: transparent;
    color: white;
    padding-bottom: solid 2px red;
    margin-right: 70px;
  }
`

const tableWrapper = css`
  color: white;
  ul {
    list-style:none;
    padding-left:0px;
  }
`



export default HotTrack
