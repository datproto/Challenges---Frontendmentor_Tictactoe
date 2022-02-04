import React from 'react';

interface ButtonProps {
    color: string;
}

function Button({ color }: ButtonProps) {
    const type = {
        'yellow': {
            'bg': 'bg-yellow-light',
            'text': 'text-navi-dark'
        }
    }

  return <div></div>;
}

export default Button;
