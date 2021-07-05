import Link from "next/link";
import { Container } from "./style";
import { Card } from "./style";
import Image from 'next/image'
import { useState } from "react";
import { api } from "../../services/api";

export function Catalog(props:any){
  const [pageCount, setPageCount] = useState(2)
  const [movies, setMovies] = useState([])

  async function fetchMoreItems(){
  setTimeout(() => {
      api.get(`movie/popular?api_key=e5e2b2d8483ff07cd74e434c12749fc5&language=en-US&page=${pageCount}`)
      .then(res => {
        setMovies(res.data)
        setPageCount(pageCount + 1)
      })
    }, 1500)
  }

  return(
    <Container>
      {
        props.content.results.map((content:any) => {
          return (
            <Card key={content.id}>
              <Link href={`/${content.id}`}>
                <a>
                  <Image 
                    width={185}
                    height={278}
                    layout="fixed"
                    src={`https://image.tmdb.org/t/p/w185${content.poster_path}`}
                  />
                </a>
              </Link>
            </Card>
          )
        })
      }
    </Container>
  )
}