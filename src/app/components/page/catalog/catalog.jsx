import React from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../ui/sideBar/sideBar';

const Catalog = () => {
  const { categoryName, underCategory } = useParams();
  // console.log('params', params);
  return (
    <div className='row'>
      <SideBar />
      <div className='col'>
        <h2>Catalog</h2>
        <h3>{ categoryName || 'Показать всё' }</h3>
        { categoryName && <p>filter: { underCategory || 'Показать всё в подкатегории' } </p> }
      </div>
    </div>
  );
};

export default Catalog;
