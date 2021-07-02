import Link from "next/link";
import { Container } from "./style";
import { Card } from "./style";

export function Catalog(props:any){
  return(
    <Container>
      {
        props.content.results.map((content:any) => {
          return (
            <Card key={content.id}>
              <Link href={`/${content.id}`}>
                <a>
                  <img src={`https://image.tmdb.org/t/p/w185${content.poster_path}`} />
                </a>
              </Link>
            </Card>
          )
        })
      }
    </Container>
  )
}