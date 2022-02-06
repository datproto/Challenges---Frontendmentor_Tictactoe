import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import Button from '../components/button';
import { selectBoard } from '../features/tictactoe/tictactoeSlice';
import _ from 'lodash';

function Game() {
  // STEP 1: Generate board
  const board = useAppSelector(selectBoard);
  let steps = _.map(new Array(board ** 2), (el, i) => [
    `step-${i}`,
    null,
    false,
  ]);

  function* chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n);
    }
  }

  // STEP 2: Update player movement and player turn
  const [step, setStep] = useState(steps);
  const [playerX, setPlayerX] = useState([]);
  const [playerO, setPlayerO] = useState([]);
  const [turn, setTurn] = useState(true);
  const updateStep = (id: string, pos: number, player: string, status) => {
    if (!status) {
      // Update step
      let oldSteps = [...step];
      let item = [...oldSteps[pos]];
      item = [id, player, true];
      oldSteps[pos] = item;
      setStep(oldSteps);

      // Change player
      setTurn(!turn);

      // Check winner
      if (player == 'x') {
        setPlayerX([...playerX, pos]);
      } else {
        setPlayerO([...playerO, pos]);
      }
    }
  };
  const playerIcon = turn ? '/assets/icon-x.svg' : '/assets/icon-o.svg';

  // STEP 3: Reset the game
  const resetStep = () => {
    setStep(steps);
    setTurn(true);
    setPlayerX([]);
    setPlayerO([]);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-full"
      style={{
        padding: '0px 42rem',
      }}
    >
      <div className="flex items-center justify-between w-full mb-5">
        <div className="flex justify-center">
          <div className="w-auto h-8">
            <img src="/assets/logo.svg" alt="" />
          </div>
        </div>

        <div
          className="flex items-center justify-center pb-2 pr-10 -ml-4 cursor-pointer pl-7 bg-navi-dark-semi rounded-2xl text-silver-normal"
          style={{
            boxShadow: 'inset 0 -4px 0 0 #10212A',
          }}
        >
          <div
            className={`w-16 h-16 transition-[background] ease-in-out duration-500 bg-silver-normal`}
            style={{
              transform: 'scale(0.35)',
              WebkitMask: `url(${playerIcon}) no-repeat center`,
              mask: `url(${playerIcon}) no-repeat center`,
            }}
          />
          <div className="-ml-2 text-base font-bold tracking-wider uppercase">
            TURN
          </div>
        </div>

        <div className="flex justify-center">
          <Button type="secondary" color="grey" onclick={() => resetStep()}>
            <img src="/assets/icon-restart.svg" alt="" />
          </Button>
        </div>
      </div>
      {/* Tictactoe */}
      <div className="grid w-full grid-cols-3 grid-rows-3 gap-6">
        {step.map((s, i) => {
          const player = turn ? 'x' : 'o';

          return (
            <div
              key={i}
              id={s[0]}
              className="flex items-center justify-center w-full cursor-pointer bg-navi-dark-semi rounded-2xl"
              style={{
                padding: '50%',
                boxShadow: 'inset 0 -8px 0 0 #10212A',
              }}
              onClick={() => updateStep(s[0], i, player, s[2])}
            >
              {s[1] ? (
                s[1] == 'x' ? (
                  <img
                    src="/assets/icon-x.svg"
                    className="absolute scale-125 t-0 r-0 b-0 l-0"
                    alt=""
                  />
                ) : (
                  <img
                    src="/assets/icon-o.svg"
                    className="absolute scale-125 t-0 r-0 b-0 l-0"
                    alt=""
                  />
                )
              ) : (
                <></>
              )}
            </div>
          );
        })}

        {/* Score cards */}
        <div className="flex flex-col items-center justify-center pt-4 pb-3 rounded-lg bg-blue-light">
          <div className="text-sm uppercase font-medim">x (you)</div>
          <div className="text-2xl font-bold">14</div>
        </div>
        <div className="flex flex-col items-center justify-center pt-4 pb-3 rounded-lg bg-silver-normal">
          <div className="text-sm uppercase font-medim">ties</div>
          <div className="text-2xl font-bold">14</div>
        </div>
        <div className="flex flex-col items-center justify-center pt-4 pb-3 rounded-lg bg-yellow-light">
          <div className="text-sm uppercase font-medim">o (cpu)</div>
          <div className="text-2xl font-bold">14</div>
        </div>
      </div>
    </div>
  );
}

export default Game;
