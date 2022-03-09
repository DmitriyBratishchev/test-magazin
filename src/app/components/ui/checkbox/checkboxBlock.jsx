import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import s from './checkboxBlock.module.css';

const CheckBoxBlock = ({ title, options, name, onChange, value, className }) => {
  const handleChange = ({ target }) => {
    const index = value.indexOf(target.value);
    index === -1
      ? value.push(target.value)
      : value.splice(index, 1);
    onChange({ name: name, value: value });
  };

  const getClassName = (id) => {
    return s.item + ' ' + (value.indexOf(id) !== -1 ? s.active : '');
  };

  return (
    <div className={ className }>
      <span className={ s.title }>{ title }</span>
      {/* <ButtonGroup> */ }
      { options.map(checkbox => {
        return (
          <Button
            color=''
            outline
            key={ checkbox._id }
            value={ checkbox._id }
            className={ getClassName(checkbox._id) }
            onClick={ handleChange }
          >
            { checkbox.name }
          </Button>
        );
      }) }
      {/* </ButtonGroup> */ }
    </div>);
};

CheckBoxBlock.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.array,
  className: PropTypes.string
};

export default CheckBoxBlock;
