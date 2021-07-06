import { GetStaticProps } from "next"
import { Slide } from "../components/slide"
import { Catalog } from "../components/catalog"
import { api } from "../services/api"

export default function Home(props: any) {
  const trends = props.trends.results.map((result: any) => {
    return {
      title: result.title,
      image: result.backdrop_path,
      overview: result.overview,
      id: result.id
    }
  })  
  return (
    <>
      <Slide trends={trends} />
      <Catalog content={props.contents} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: trends } = await api.get(`trending/movie/week?api_key=${process.env.API_KEY}&page=1`)
  const { data: contents } = await api.get(`movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)

  return {
    props: {
      trends,
      contents
    }
  }
}