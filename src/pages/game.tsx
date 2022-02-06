import React, { useState } from 'react';
import Button from '../components/button';

function Game() {
  const [step, setStep] = useState(false);

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
              WebkitMask: 'url(/assets/icon-x.svg) no-repeat center',
              mask: 'url(/assets/icon-x.svg) no-repeat center',
            }}
          />
          <div className="-ml-2 text-base font-bold tracking-wider uppercase">
            TURN
          </div>
        </div>

        <div className="flex justify-center">
          <Button type="secondary" color="grey">
            <img src="/assets/icon-restart.svg" alt="" />
          </Button>
        </div>
      </div>
      {/* Tictactoe */}
      <div className="grid w-full grid-cols-3 grid-rows-3 gap-6">
        {Array.apply(null, { length: 9 }).map((e, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-full cursor-pointer bg-navi-dark-semi rounded-2xl"
            style={{
              padding: '50%',
              boxShadow: 'inset 0 -8px 0 0 #10212A',
            }}
            onClick={() => setStep(!step)}
          >
            {step ? (
              <img
                src="/assets/icon-x.svg"
                className="absolute scale-125 t-0 r-0 b-0 l-0"
                alt=""
              />
            ) : (
              <></>
            )}
          </div>
        ))}

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
