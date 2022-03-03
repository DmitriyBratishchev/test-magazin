import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CategoryCard from './categoryCard';
import classNames from 'classnames';
import s from './listCategories.module.css';

const ListCategories = ({ toggle }) => {
  const [listData] = useState(
    [
      {
        title: '1 category',
        link: 'category1',
        list: [
          {
            title: 'name1',
            link: 'name1'
          },
          {
            title: 'name2',
            link: 'name2'
          },
          {
            title: 'name3',
            link: 'name3'
          },
          {
            title: 'name4',
            link: 'name4'
          }
        ]
      },
      {
        title: '2 category',
        link: 'category2',
        list: [
          {
            title: 'name1',
            link: 'name1'
          },
          {
            title: 'name2',
            link: 'name2'
          },
          {
            title: 'name3',
            link: 'name3'
          },
          {
            title: 'name4',
            link: 'name4'
          }
        ]
      },
      {
        title: '3 category',
        link: 'category3',
        list: [
          {
            title: 'name1',
            link: 'name1'
          },
          {
            title: 'name2',
            link: 'name2'
          },
          {
            title: 'name3',
            link: 'name3'
          },
          {
            title: 'name4',
            link: 'name4'
          },
          {
            title: 'name5',
            link: 'name5'
          },
          {
            title: 'name6',
            link: 'name6'
          },
          {
            title: 'name7',
            link: 'name7'
          },
          {
            title: 'name8',
            link: 'name8'
          }
        ]
      },
      {
        title: '4 category',
        link: 'category4',
        list: [
          {
            title: 'name1',
            link: 'name1'
          },
          {
            title: 'name2',
            link: 'name2'
          },
          {
            title: 'name3',
            link: 'name3'
          },
          {
            title: 'name4',
            link: 'name4'
          }
        ]
      },
      {
        title: '5 categoryfffff ffff frr rrrrrrrrrr',
        link: 'category5',
        list: [
          {
            title: 'name1',
            link: 'name1'
          },
          {
            title: 'name2',
            link: 'name2'
          },
          {
            title: 'name3',
            link: 'name3'
          },
          {
            title: 'name4',
            link: 'name4'
          }
        ]
      },
      {
        title: '6 category',
        link: 'category6',
        list: [
          {
            title: 'name1',
            link: 'name1'
          },
          {
            title: 'name2',
            link: 'name2'
          },
          {
            title: 'name3',
            link: 'name3'
          },
          {
            title: 'name4',
            link: 'name4'
          }
        ]
      }
    ]
  );
  if (listData.length === 0) return <h3>Loading...</h3>;
  return (
    <div className={ classNames(s.container) }>
      { listData.map(el => {
        return (
          <CategoryCard
            key={ el.link }
            list={ el }
            toggle={ toggle }
          />
        );
      })
      }
    </div >
  );
};

ListCategories.propTypes = {
  toggle: PropTypes.func
};

export default ListCategories;
