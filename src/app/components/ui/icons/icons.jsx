import React from 'react';
import IconsSVG from './icons.svg';
import PropTypes from 'prop-types';

const Icons = ({ name, color, width = '22', height = '20', className }) => {
  return (
    <svg className={ `bi icon-${name} ${className}` } fill={ color } width={ width } height={ height }>
      <use xlinkHref={ `${IconsSVG}#icon-${name}` } />
    </svg>
  );
};

Icons.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
};

export default Icons;
