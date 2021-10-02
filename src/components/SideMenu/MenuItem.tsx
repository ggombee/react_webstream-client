import React from 'react'
import { css } from '@emotion/react'

interface IMenuItem {
  activate: boolean
  menuName: string
  iconSrc: any
}

const MenuItem: React.FC<IMenuItem> = (props) => {
  return (
    <p css={props.activate ? [menuItem, active] : menuItem}>
      <img src={props.iconSrc} alt={props.menuName} />
      <span
        css={css`
          margin-left: 15px;
        `}
      >
        {props.menuName}
      </span>
    </p>
  )
}

export default MenuItem

const menuItem = css`
  display: inline-flex;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 25px;
  color: #5e6266;
  cursor: pointer;
`
const active = css`
  color: #fff;
`
