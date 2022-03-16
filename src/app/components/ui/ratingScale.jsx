import React from 'react';
import PropTypes from 'prop-types';
import s from './ratingScale.module.css';

const RatingScale = ({ rating }) => {
  const widthInPercent = 100 * rating / 5;
  return (
    <div className='d-flex align-items-center' style={ { fontSize: '12px' } }>
      <div className={ s.starBlock } >
        <div className={ s.negative }></div>
        <div className={ s.positive } style={ { width: `${widthInPercent}%` } }></div>
      </div >
      <div>
        <span className={ s.text }>{ rating }</span>
      </div>
    </div>
  );
};

RatingScale.propTypes = {
  rating: PropTypes.number
};

export default RatingScale;
