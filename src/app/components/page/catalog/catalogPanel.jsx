import React, { useState } from 'react';
// import { CardImg } from 'reactstrap';
// import { Button, ButtonGroup } from 'reactstrap';
import RadioBlockField from '../../common/form/radioBlockField';
import SelectField from '../../common/form/selectField';
import CheckBoxBlock from '../../ui/checkbox/checkboxBlock';
// import Icons from '../../ui/icons';

const sortArray = [
  { _id: '1', name: 'Useless first' },
  { _id: '2', name: 'Useless first' },
  { _id: '3', name: 'Useless first' },
  { _id: '4', name: 'Useless first' }
];
const sortArray1 = [
  { _id: '1a', name: 'Condition' },
  { _id: '2a', name: 'Condition' },
  { _id: '3a', name: 'Condition' },
  { _id: '4a', name: 'Condition' }
];
const sortArray2 = [
  { _id: '1b', name: 'Delivery options' },
  { _id: '2b', name: 'Delivery options' },
  { _id: '3b', name: 'Delivery options' },
  { _id: '4b', name: 'Delivery options' }
];
const visibility = [
  { _id: '11', name: 'Show all' },
  { _id: '22', name: 'Auction' },
  { _id: '33', name: 'Buy now' }
];

const typeList = [
  { _id: '111', icon: { name: 'listicon', width: '17', height: '14' } },
  { _id: '222', icon: { name: 'rowlist', width: '18', height: '18' } }
];

const related = [
  { _id: '1111', name: 'worldwide shipping' },
  { _id: '2222', name: 'under $50' },
  { _id: '3333', name: 'kitten' },
  { _id: '4444', name: 'plastic plugs' },
  { _id: '5555', name: 'pucker shoes' },
  { _id: '6666', name: 'vintage typewriter' }
];

const initialOptions = {
  sortBy: '1',
  sortBy1: '1a',
  sortBy2: '1b',
  visibility: '11',
  typeList: '111',
  related: []
};
const CatalogPanel = () => {
  const [options, setOptions] = useState(initialOptions);
  console.log('opt', options);

  const handleChange = (target) => {
    setOptions((prev) => ({
      ...prev,
      [target.name]: target.value
    }));
  };
  return (
    <div className="mt-3 mb-3">
      <div className='d-flex'>
        <div className='d-flex me-auto'>
          <SelectField
            className='me-2'
            label='SORT BY'
            lablePosition='onTheBorder'
            name='sortBy'
            disabled={ false }
            value={ options.sortBy }
            options={ sortArray || [] }
            onChange={ handleChange }
          />
          <SelectField
            // label='SORT BY'
            name='sortBy1'
            value={ options.sortBy1 }
            options={ sortArray1 || [] }
            onChange={ handleChange }
          />
          <SelectField
            // label='SORT BY'
            name='sortBy2'
            value={ options.sortBy2 }
            options={ sortArray2 || [] }
            onChange={ handleChange }
          />
        </div>
        <div className='d-flex'>
          <RadioBlockField
            className='me-4'
            options={ visibility }
            onChange={ handleChange }
            value={ options.visibility }
            name='visibility'
          />
          <RadioBlockField
            options={ typeList }
            onChange={ handleChange }
            value={ options.typeList }
            name='typeList'
          />
        </div>
      </div>
      <div>
        <CheckBoxBlock
          title='Related'
          className='mt-4'
          options={ related }
          onChange={ handleChange }
          value={ options.related }
          name='related'
        />

      </div>
    </div>
  );
};

export default CatalogPanel;
