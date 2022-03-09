import React from 'react';
// import { useParams } from 'react-router-dom';
import NavigationTopMenu from '../../ui/navigationTopMenu/navigationTopMenu';
import SideBar from '../../ui/sideBar/sideBar';
import CatalogCardList from './catalogCardList';
import CatalogPanel from './catalogPanel';
import s from './catalog.module.css';

const Catalog = () => {
  // const { categoryName, underCategory } = useParams();
  // console.log('params', params);
  return (
    <div>
      <NavigationTopMenu />
      <div className='row mt-5'>
        <SideBar />
        <div className={ s.container + ' col' }>
          {/* <h2>Catalog</h2> */ }
          <CatalogPanel />
          {/* <h3>{ categoryName || 'Показать всё' }</h3> */ }
          {/* { categoryName && <p>filter: { underCategory || 'Показать все подкатегории' } </p> } */ }
          <CatalogCardList />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
