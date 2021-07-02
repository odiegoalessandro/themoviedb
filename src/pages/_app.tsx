import { AppProps } from "next/dist/next-server/lib/router/router"
import { createGlobalStyle } from "styled-components"
import { Menu } from '../components/menu'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Noto Sans JP';
    
    @media(max-width: 1800px){
      html{
        font-size: 93.75%;
      }
    }
  }
  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }
  body{
    background: #000;
    max-width: 100vw;
    overflow-x: hidden;
  }
  h1{
    font-size: 2rem; 
  }
  h2{
    font-size: 1.5rem; 
  }
  button{
    cursor: pointer;
    border: none;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <GlobalStyle/>
    </>
  )
}

export default MyApp