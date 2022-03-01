import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        title: '5 category',
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
      }
    ]
  );
  return (
    <div>
      { listData.map(el => {
        return (
          <div key={ el.title }>
            <h3><Link to={ `/catalog/${el.link}` } onClick={ toggle }>{ el.title }</Link></h3>
            <ul>
              { el.list.map(item => {
                return (
                  <li key={ item.link }><Link to={ `/catalog/${el.link}/${item.link}` } onClick={ toggle }>{ item.title }</Link></li>
                );
              }) }
            </ul>
          </div>
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
