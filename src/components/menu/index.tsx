import Link from 'next/link'
import Img from 'next/image'
import { Container } from './style'

export function Menu(){
  return(
    <Container>
    <ul>
      <li>
        <Link href="/">
          <a><Img src='/icon-short.svg' width={200} height={50} /></a>
        </Link>
      </li>
    </ul>
    </Container>
  )
}
