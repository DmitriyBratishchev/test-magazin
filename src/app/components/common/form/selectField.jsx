import React from 'react';
import PropTypes from 'prop-types';
import s from './selectedField.module.css';
import classNames from 'classnames';

const SelectField = ({
  label,
  lablePosition,
  value,
  name,
  onChange,
  onFocus,
  options,
  className,
  required,
  disabled = true,
  error
}) => {
  const handleChange = ({ target }) => {
    console.log('target select', target.name, target.value);
    onChange({ name: target.name, value: target.value });
  };
  const getLableClasses = () => {
    switch (lablePosition) {
      case 'onTheBorder':
        return s.labelIn;

      default:
        return 'form-lable';
    }
  };
  const getInputClasses = () => {
    return 'form-select' + ' ' + s.arrow + (error ? ' is-invalid' : '');
  };
  // const optionsArray =
  //   !Array.isArray(options) && typeof options === 'object'
  //     ? Object.keys(options).map((optionName) => ({
  //       name: options[optionName].name,
  //       id: options[optionName]._id
  //     }))
  //     : options;

  return (
    <div className={ s.containerSelect }>
      { label && <label htmlFor={ name } className={ getLableClasses() }>
        { label } { required && <span className='text-danger'>*</span> }
      </label> }
      <select
        contextMenu=''
        disabled={ disabled }
        onFocus={ onFocus }
        className={ classNames(getInputClasses(), s.arrow, s.select) }
        name={ name }
        value={ value }
        onChange={ handleChange }
      >
        { options &&
          options.map((option) => (
            <option key={ option._id } value={ option._id }>
              { option.name }
            </option>
          )) }
      </select>
      { error && <div className='invalid-feedback'>{ error }</div> }
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  lablePosition: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default SelectField;
