import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../store/filter';
import { setSortBy } from '../../../store/sortBy';
// import { CardImg } from 'reactstrap';
// import { Button, ButtonGroup } from 'reactstrap';
import RadioBlockField from '../../common/form/radioBlockField';
import SelectField from '../../common/form/selectField';
import CheckBoxBlock from '../../ui/checkbox/checkboxBlock';
// import Icons from '../../ui/icons';

// const sortArray = [
//   { _id: '1', name: 'Useless first' },
//   { _id: '2', name: 'Useless first' },
//   { _id: '3', name: 'Useless first' },
//   { _id: '4', name: 'Useless first' }
// ];
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
  { _id: '1111', name: 'меньше $50' },
  { _id: '2222', name: '$50.01-100' },
  { _id: '3333', name: '$100.01-150' },
  { _id: '4444', name: '$150.01-200' },
  { _id: '5555', name: '$200.01-250' },
  { _id: '6666', name: 'свыше $250' }
];

const initialOptions = {
  sortBy: '0',
  sortBy1: '1a',
  sortBy2: '1b',
  visibility: '11',
  typeList: '111',
  related: [
    '1111',
    '2222',
    '3333',
    '4444',
    '5555',
    '6666'
  ]
};
const CatalogPanel = () => {
  const dispatch = useDispatch();
  const sortOptions = useSelector((state) => state.sortBy.entities);
  const [options, setOptions] = useState(initialOptions);

  const handleChange = (target) => {
    setOptions((prev) => ({
      ...prev,
      [target.name]: target.value
    }));
  };

  useEffect(() => {
    dispatch(setSortBy(options.sortBy));
  }, [options.sortBy]);
  useEffect(() => {
    dispatch(setFilter({ price: [...options.related] }));
  }, [options]);

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
            options={ sortOptions || [] }
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
