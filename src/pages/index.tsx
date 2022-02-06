import type { NextPage } from 'next'
import Head from 'next/head'
import Game from './game'
import Menu from './menu'

const IndexPage: NextPage = () => {

  return (
    <div className='h-full'>
      <Head>
        <title>Tic Tac Toe - Frontendmentor challenge</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <div className='h-full'>
        <Game />
      </div>
    </div>
  )
}

export default IndexPage
