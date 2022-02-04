import type { NextPage } from 'next'
import Head from 'next/head'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectWinCount, selectMove } from '../features/tictactoe/tictactoeSlice'

import { addStep } from '../features/tictactoe/tictactoeSlice'

const IndexPage: NextPage = () => {
  const state = useAppSelector(selectMove)
  const dispatch = useAppDispatch()

  const players = [
    'x', 'o'
  ]

  const add = (p: 'x' | 'o') => {
    dispatch(
      addStep({
        step: Math.floor(Math.random() * 10) + 1,
        player: p
      })
    )
  }

  return (
    <div>
      <Head>
        <title>Tic Tac Toe - Frontendmentor challenge</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <button onClick={() => add('x')} type="button" className="px-5 py-2 rounded-md bg-blue-light text-navi-dark">Add X step</button>
      <button onClick={() => add('o')} type="button" className="px-5 py-2 rounded-md bg-yellow-light text-navi-dark">Add Y step</button>
      <div className='font-bold text-silver-normal'>
        {state.map((s, i) => (
          <div><pre>{JSON.stringify(s.step, null, 2) }</pre></div>
        ))}
      </div>
    </div>
  )
}

export default IndexPage
