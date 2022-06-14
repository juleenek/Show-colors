import React from 'react';

type Props = {
  color: string;
};

export const ColorBox: React.FC<Props> = ({ color }) => {
  return (
    <div className='colorBox' style={{ backgroundColor: `${color}` }}>
      {color === '' ? (<p>Empty Value</p>) : (<p>{color}</p>)}
    </div>
  );
};
