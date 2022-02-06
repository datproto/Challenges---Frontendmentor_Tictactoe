import React from 'react';

function Game() {
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
          className="flex items-center justify-center pt-3 pb-5 cursor-pointer bg-navi-dark-semi rounded-2xl"
          style={{
            boxShadow: 'inset 0 -8px 0 0 #10212A',
          }}
        >
          <div
            className={`w-16 h-16 scale-50 transition-[background] ease-in-out duration-500 bg-silver-normal`}
            style={{
              WebkitMask: 'url(/assets/icon-x.svg) no-repeat center',
              mask: 'url(/assets/icon-x.svg) no-repeat center',
            }}
          />
        </div>

        <div className="flex justify-center">
          <div className="w-auto h-8">
            <img src="/assets/logo.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 grid-rows-3 gap-6">
        {Array.apply(null, { length: 9 }).map((e, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-full cursor-pointer bg-navi-dark-semi rounded-2xl"
            style={{
              padding: '50%',
              boxShadow: 'inset 0 -8px 0 0 #10212A',
            }}
          >
            <img
              src="/assets/icon-x.svg"
              className="absolute scale-125 t-0 r-0 b-0 l-0"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
