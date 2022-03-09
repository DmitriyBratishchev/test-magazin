import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import s from './radioBlockField.module.css';

const RadioBlockField = ({ options, name, onChange, value, className }) => {
  const handleChange = ({ target }) => {
    console.log('target select', target.value);
    onChange({ name: name, value: target.value });
  };

  const getClassName = (id) => {
    return s.item + ' ' + (value === id ? s.active : '');
  };

  return (
    <div className={ className }>
      <ButtonGroup>
        { options.map(radio => {
          return (
            <Button
              color=''
              outline
              key={ radio._id }
              // active={ value === radio._id }
              value={ radio._id }
              className={ getClassName(radio._id) }
              onClick={ handleChange }
            >
              { radio.name }
            </Button>
          );
        }) }
      </ButtonGroup>
    </div>);
};

RadioBlockField.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string
};

export default RadioBlockField;
