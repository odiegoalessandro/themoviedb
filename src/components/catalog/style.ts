import styled from 'styled-components'

export const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 6rem 0;
  @media(max-width: 400px){
    justify-content: center;
  }
  @media(max-width: 830px){
    width: 100vw;
  }
  @media(max-width: 900px){
    width: 80vw;
  }
  main{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    gap: 1rem;
  }
  footer{
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
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
export const LoadButton = styled.button`
  width: 10rem;
  border-radius: 7px;
  height: 50px;
  background: #0FB6DE;
  color: #fff;
  margin: 20px 0;
  align-self: center;
`