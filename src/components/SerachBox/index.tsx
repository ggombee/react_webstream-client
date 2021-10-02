import React from 'react'
import { css } from '@emotion/react'
import SearchImg from '~/assets/icons/search.png'

const SearchBox = () => {
  return (
    <div css={searchWrapper}>
      <select css={searchFilter}>
        <option value="0">All</option>
        <option value="1">Maker</option>
        <option value="2">Beat</option>
      </select>
      <input
        css={searchInput}
        type="text"
        placeholder="Search by title, artist, #"
      />
      <img css={seachButton} src={SearchImg} alt={'search'} />
    </div>
  )
}

export default SearchBox

const searchWrapper = css`
  width: 370px;
  height: 40px;
  background: #151515;
  border: 1px solid #2c2c2f;
  box-sizing: border-box;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.15);
  border-radius: 80px;
  display: inline-flex;
  align-items: center;
  padding-left: 22px;
  padding-right: 12px;
`

const searchFilter = css`
  background: transparent;
  height: 100%;
  border: none;
  color: #fff;
  &:focus {
    outline: none;
    border: none;
  }
`

const searchInput = css`
  height: 100%;
  flex: 1;
  background: transparent;
  border: none;
  margin-left: 20px;
  color: #fff;
  &:focus {
    outline: none;
    border: none;
  }
`

const seachButton = css`
  width: 15px;
  height: 15px;
`
