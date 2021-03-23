import Head from 'next/head'
import styled from 'styled-components';
import Image from "next/image";

//Components
import {Controls} from '../src/components/controls';
import Songlist from '../src/components/songlist';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zangboek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Image
          src="/download.png"
          width={100}
          height={100}
        />
        <h1>Liedjes voor de zangboeken 45Ste FOS De Schrans, met eer hooggehouden door de huidige EL: LODEN VAN DEN BROECKEN, VIKTOREN DE VERKSTE, JOHAN, HEER BJ DE VERDONCK. (Oprichters en hooghouders van de goede naam die onze scouts zegend (godwezebijonsamen))</h1>
        <Controls/>
        <Songlist/>
      </Container>
    </div>
  )
}


const Container = styled.div`

  //Position and dimensions
  max-width: 1000px;
  width: 100%;
  margin: 35px auto;

  img{
    border: solid 1px red;
  }

  @media only screen and (max-width: 1200px){
    width: 95%;
    min-width: none;
  }

  //Children 
  *{
    box-sizing: border-box;
    margin: 0;
  }

  h1{
    font-size: 16px;
    margin-bottom: 15px;
    font-weight: bold;
    text-align: center;
  }


`