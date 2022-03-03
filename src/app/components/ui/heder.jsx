import React, { useState } from 'react';
import classNames from 'classnames';
// import './header.css';
import st from './header.module.css';

const Header = () => {
  const [italic, setItalic] = useState(true);

  const handleItalic = () => {
    setItalic(prev => !prev);
  };
  console.log('ital', italic);
  return (
    <h1 onClick={ handleItalic } className={ classNames(st.text, italic ? st.italic : '', 'blue') }>Привет!</h1>
  );
};

export default Header;
