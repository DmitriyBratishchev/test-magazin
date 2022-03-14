import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import s from './radioBlockField.module.css';
import Icons from '../../ui/icons';

const RadioBlockField = ({ options, name, onChange, value, className }) => {
  const handleChange = ({ target }) => {
    onChange({ name: name, value: target.value });
  };

  const getClassName = (id) => {
    return s.item + ' ' + (value === id ? s.active : '');
  };

  return (
    <div className={ s.radioBlock }>
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
              onClick={ e => handleChange(e) }
            >
              { radio?.name
                ? radio.name
                : <Icons
                  name={ radio.icon.name }
                  width={ radio.icon.width }
                  height={ radio.icon.height }
                  color={ value === radio._id ? '#2979FF' : '#787885' }
                  className={ s.iconButton }
                />

              }
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
