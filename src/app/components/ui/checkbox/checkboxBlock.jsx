import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import s from './checkboxBlock.module.css';

const CheckBoxBlock = ({ title, options, name, onChange, value, className }) => {
  console.log('checkBox value', value);
  const handleChange = ({ target }) => {
    console.log('checkBox target', target.value);
    const index = value.indexOf(target.value);
    const newValue = index === -1
      ? [...value, target.value]
      : [...value].filter((e, i) => i !== index);
    onChange({ name: name, value: newValue });
  };

  const getClassName = (id) => {
    return s.item + ' ' + (value.indexOf(id) !== -1 ? s.active : '');
  };

  return (
    <div className={ s.container }>
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
