import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  :root {
    font-size: 62.5%;
    font-family: Ubuntu;
    background: #0E1B3B;
    color: #def;
  }
`
