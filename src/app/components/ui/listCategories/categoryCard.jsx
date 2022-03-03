import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import s from './listCategories.module.css';
import { List } from 'reactstrap';

const CategoryCard = ({ list, toggle }) => {
  return (
    <div className={ classNames(s.card) }>
      <h3 className={ classNames(s.headerCard) }>
        <Link to={ `/catalog/${list.link}` } onClick={ toggle }>
          { list.title }
        </Link>
      </h3>
      <List type='unstyled' className='ms-4'>
        { list.list.map(item => {
          return (
            <li key={ item.link }>
              <Link className={ classNames(s.listItem) } to={ `/catalog/${list.link}/${item.link}` } onClick={ toggle }>
                { item.title }
              </Link>
            </li>
          );
        }) }
      </List>
    </div >
  );
};

CategoryCard.propTypes = {
  list: PropTypes.object,
  toggle: PropTypes.func
};

export default CategoryCard;
