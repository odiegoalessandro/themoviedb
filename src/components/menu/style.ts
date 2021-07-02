import styled from 'styled-components'

export const Container = styled.nav`
  width: 100vw;
  padding: 0 2rem;
  height: 4rem;
  top: 0;
  left: 0;
  right: 0;
  background: #00000020;
  position: fixed;
  z-index: 10;
  ul{
    display: flex;
    align-items: center;
    @media(max-width: 500px){
      justify-content: center;
    }
    gap: .5rem;
  }
  ul li{
    list-style: none;
  }
`