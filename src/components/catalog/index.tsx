import Link from "next/link";
import { Container, Card, LoadButton } from "./style";
import Image from 'next/image'
import { useState } from "react";
import { api } from "../../services/api";

export function Catalog(props:any){
  const [pageCount, setPageCount] = useState(2)
  const [completed, setCompleted] = useState(false)
  const [movies, setMovies] = useState(props.content.results)

  async function updateMovies(){
    await api.get(`movie/popular?api_key=e5e2b2d8483ff07cd74e434c12749fc5&language=en-US&page=${pageCount}`)
    .then(res => {
      if(pageCount < props.content.total_pages){
        setMovies((prev: any) => [ ...prev, ...res.data.results ])
        setPageCount((prev: any) => prev + 1)
        setCompleted(false)
      }
      else{
        setCompleted(true)
      }
    })
  }

  return(
    <Container key={pageCount}>
      <main>
        {
          movies.map((content:any) => {
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
      </main>
      <footer>
        {
          completed === false && (
            <LoadButton onClick={() => updateMovies()}>
              Carregar mais
            </LoadButton>
          )
        }
      </footer>
    </Container>
  )
}