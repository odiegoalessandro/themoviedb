import { Slider, Image, Container, Content, Title, Overview } from './style'
import { useState } from "react"
import Link from 'next/link'


export function Slide(props:any){
  const [current, setCurrent] = useState(0)
  const length = props.trends.length

  setTimeout(() => setCurrent(current === length - 1 ? 0 : current + 1), 1000 * 25)
  return(
    <>
      <Slider>
        {
          props.trends.map((result: any, index: number) => {
            return (
              <Link href={`/${result.id}`} key={result.id}>
                <a>
                  <Container className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                      <>
                        <Image 
                          src={`https://image.tmdb.org/t/p/w1280/${result.image}`}
                          key={result.title}
                          alt={result.title}
                        />
                        <Content>
                          <Title>{result.title}</Title>
                          <Overview>{result.overview}</Overview>
                        </Content>
                      </>
                    )}
                  </Container>
                </a>
              </Link>
            )
          })
        }
      </Slider>
    </>
  )
}