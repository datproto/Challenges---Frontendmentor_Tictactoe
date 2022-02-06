import React, { useState } from 'react';
import Button from '../components/button';

function Menu() {
  const [choose, setChoose] = useState(false);

  return (
    <div
      className="flex flex-col justify-center h-full"
      style={{
        padding: '0px 36rem',
      }}
    >
      <div className="flex justify-center mb-10">
        <div className="w-auto h-8">
          <img src="/assets/logo.svg" alt="" />
        </div>
      </div>

      <div
        className="flex flex-col items-center w-full p-6 tracking-widest uppercase pb-7 bg-navi-dark-semi text-silver-normal rounded-2xl"
        style={{
          boxShadow: 'inset 0 -8px 0 0 #10212A',
        }}
      >
        <span className="text-base font-bold">pick player 1's mark</span>
        <div className="w-full p-2 mt-6 mb-5 rounded-2xl bg-navi-dark">
          <div className="relative flex w-full h-14">
            <div
              className="z-50 flex items-center justify-center w-1/2 h-full cursor-pointer"
              onClick={() => setChoose(true)}
            >
              <div
                className={`w-16 h-16 scale-50 transition-[background] ease-in-out duration-500 ${
                  choose ? 'bg-navi-dark' : 'bg-silver-normal'
                }`}
                style={{
                  WebkitMask: 'url(/assets/icon-x.svg) no-repeat center',
                  mask: 'url(/assets/icon-x.svg) no-repeat center',
                }}
              />
            </div>
            <div
              className="z-50 flex items-center justify-center w-1/2 h-full cursor-pointer"
              onClick={() => setChoose(false)}
            >
              <div
                className={`w-16 h-16 scale-50 transition-[background] ease-in-out duration-500 ${
                  !choose ? 'bg-navi-dark' : 'bg-silver-normal'
                }`}
                style={{
                  WebkitMask: 'url(/assets/icon-o.svg) no-repeat center',
                  mask: 'url(/assets/icon-o.svg) no-repeat center',
                }}
              />
            </div>
            <div
              className={`absolute z-0 w-1/2 h-full transition-[left] ease-in-out ${
                !choose ? 'left-1/2' : 'left-0'
              } bg-silver-normal rounded-2xl`}
            />
          </div>
        </div>
        <span className="text-sm font-medium opacity-50">
          REMEMBER : X GOES FIRST
        </span>
      </div>

      <div className="flex flex-col gap-5 mt-10">
        <Button type="primary" color="yellow">
          NEW GAME (VS CPU)
        </Button>
        <Button type="primary" color="blue">
          NEW GAME (VS PLAYER)
        </Button>
      </div>
    </div>
  );
}

export default Menu;
