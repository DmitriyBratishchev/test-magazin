import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import s from './navigationTopMenu.module.css';

import Icons from '../icons';

const navTopMenu = [
  {
    iconName: 'nav1',
    text: 'Clothing & Shoes',
    linkTo: 'Clothing'
  },
  {
    iconName: 'nav2',
    text: 'Entertainment',
    linkTo: 'Entertainment'
  },
  {
    iconName: 'nav3',
    text: 'Music',
    linkTo: 'Music'
  },
  {
    iconName: 'nav4',
    text: 'Sport & Lifestyle',
    linkTo: 'SportLifestyle'
  },
  {
    iconName: 'nav5',
    text: 'Pets',
    linkTo: 'Pets'
  },
  {
    iconName: 'nav6',
    text: 'Kitchen Accessories',
    linkTo: 'KitchenAccessories'
  },
  {
    iconName: 'nav7',
    text: 'Travel Equipment',
    linkTo: 'TravelEquipment'
  },
  {
    iconName: 'nav8',
    text: 'Growing & Garden',
    linkTo: 'GrowingGarden'
  },
  {
    iconName: 'nav9',
    text: 'Electrical Tools',
    linkTo: 'ElectricalTools'
  },
  {
    iconName: 'nav10',
    text: 'Mother Care',
    linkTo: 'MotherCare'
  },
  {
    iconName: 'nav11',
    text: 'Toys & Entertainment',
    linkTo: 'ToysEntertainment'
  },
  {
    iconName: 'nav12',
    text: 'Vintage',
    linkTo: 'Vintage'
  }
];

const NavigationTopMenu = () => {
  const { location } = useHistory();
  console.log('params = ', location);

  const getColor = (linkTo) => {
    return location.pathname.includes(linkTo) ? '#2979FF' : '#787885';
  };
  const getWeight = (linkTo) => {
    return location.pathname.includes(linkTo) ? '500' : '400';
  };
  return (
    <div className={ s.container }>
      { navTopMenu.map(item => {
        return (
          <Link key={ item.text + item.linkTo } to={ `/catalog/${item.linkTo}` } className={ s.linkBlock }>
            <Icons name={ item.iconName } color={ getColor(item.linkTo) } />
            <div className={ s.text } style={ { color: `${getColor(item.linkTo)}`, fontWeight: `${getWeight(item.linkTo)}` } }>{ item.text }</div>
          </Link>
        );
      }) }
    </div>
  );
};

export default NavigationTopMenu;
