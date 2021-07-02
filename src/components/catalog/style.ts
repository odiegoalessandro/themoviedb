import styled from 'styled-components'

export const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 6rem 0;
  gap: 1rem;
  justify-content: center;
  @media(max-width: 400px){
    justify-content: center;
  }
  @media(max-width: 830px){
    width: 100vw;
  }
  @media(max-width: 900px){
    width: 80vw;
  }
`
export const Card = styled.div`
  width: 185px;
  height: 278px;
  gap: 1rem;
  cursor: pointer;
  img{
    border-radius: 6px;
  }
`