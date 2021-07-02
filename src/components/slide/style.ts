import styled from 'styled-components'


export const Slider = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  position: relative;
`
export const Image = styled.img`
  z-index: 1;
  width: 100%;
  height: 90vh;
  object-fit: cover;
  animation: zoom 4s forwards ease-in-out;
  @keyframes zoom{
    from{
      transform: scale(1.2) rotate(4deg);
    }
    to{
      transform: scale(1) rotate(0);
    }
  }
`

export const Container = styled.div`
  position: absolute;
  inset: 0;
  &.slide{
    opacity: 0;
    transition-duration: .8s case;
  }
  &.slide.active{
    opacity: 1;
    transition: .8s;
    transform: scale(1.0);
  }
`
export const Content = styled.div`
  inset: 0;
  background: #00000070;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem 3rem;
  justify-content: flex-end;
  position: absolute;
`
export const Title = styled.h2`
  color: #fff;
  font-family: 'Noto Sans JP';
  margin-bottom: 1rem;
`
export const Overview = styled.p`
  color: #fff;
  font-weight: 300;
  width: 20rem;
  max-height: 70%;
  @media(min-width: 400px){
    font-size: .9rem;
  }
  @media(max-width: 325px){
    width: 100%;
    font-size: .8rem;
  }
`

