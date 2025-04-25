import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import HeroFunnel from '../components/hero-funnel'
import ContentCards from '../components/content-cards'
import MistakesWhitepaper from '../components/mistakes-whitepaper'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Binarystar</title>
          <meta property="og:title" content="Binarystar" />
        </Head>
        <Header rootClassName="headerroot-class-name"></Header>
        <HeroFunnel
          imageSrc="/dome.svg"
          rootClassName="hero-funnelroot-class-name"
        ></HeroFunnel>
        <ContentCards rootClassName="content-cardsroot-class-name"></ContentCards>
        <MistakesWhitepaper rootClassName="mistakes-whitepaperroot-class-name"></MistakesWhitepaper>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Home
