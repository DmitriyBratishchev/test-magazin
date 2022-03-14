import React from 'react';
import IconsSVG from './icons.svg';
import PropTypes from 'prop-types';

const Icons = ({ name, color, width = '22', height = '20', className = '', onClick }) => {
  return (
    <svg className={ ` icon-${name} ${className}` } fill={ color } width={ width } height={ height } style={ { pointerEvents: 'none' } }>
      <use xlinkHref={ `${IconsSVG}#icon-${name}` } />
    </svg>
  );
};

Icons.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Icons;
