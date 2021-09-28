import { Global, css } from '@emotion/react'

const style = css`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #000;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
