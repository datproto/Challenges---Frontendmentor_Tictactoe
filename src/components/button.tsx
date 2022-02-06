import React from 'react';

interface ButtonProps {
  color: string;
  children: any;
  onclick?: any;
}

function PrimaryButton({
  children,
  color = 'blue',
  onclick = null,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onclick}
      className={`
            button w-full px-5 pt-4 pb-6 rounded-2xl text-navi-dark font-bold uppercase
            ${
              color == 'blue'
                ? `button-blue bg-blue-light hover:bg-blue-light-hover`
                : 'button-yellow bg-yellow-light hover:bg-yellow-light-hover'
            }
        `}
    >
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  color = 'yellow',
  onclick = null,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onclick}
      className={`
            button w-full p-4 rounded-2xl text-navi-dark font-bold uppercase
            ${
              color == 'yellow'
                ? 'button-secondary-yellow bg-yellow-light hover:bg-yellow-light-hover'
                : 'button-secondary-grey bg-silver-normal hover:bg-silver-hover'
            }
        `}
    >
      {children}
    </button>
  );
}

const Button = ({ type, color, onclick = null, children }) =>
  type == 'primary' ? (
    <PrimaryButton color={color} onclick={onclick}>
      {children}
    </PrimaryButton>
  ) : (
    <SecondaryButton color={color} onclick={onclick}>
      {children}
    </SecondaryButton>
  );

export default Button;
