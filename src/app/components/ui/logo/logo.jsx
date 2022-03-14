import React from 'react';
import Icons from '../icons';

const style = {
  icon: {
    background: 'linear-gradient(90deg, #2979FF 0%, #4C589E 100%)',
    borderRadius: '6px',
    padding: '7px 10px 8px 9px'
  },
  text: {
    margin: '2px 0 0 11px',
    letterSpacing: '-1px',
    color: '#0C2146',
    fontSize: '36px',
    lineHeight: '36px'
  }
};

const Logo = () => {
  return (
    <div className='d-flex'>
      <div style={ style.icon }>
        <Icons name='letter' width='21' height='24' />
      </div>
      <h2 style={ style.text }>
        Shopka
      </h2>
    </div>
  );
};

export default Logo;
