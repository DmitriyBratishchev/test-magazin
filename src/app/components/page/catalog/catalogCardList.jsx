import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogList, loadCatalogList } from '../../../store/catalog';
import { getFilterPrice } from '../../../store/filter';
import { getCatalogAfterSort } from '../../../store/sortBy';
import CardVertical from '../../ui/cardVertical/cardVertical';

const CatalogCardList = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(getCatalogList());
  const catalogFilter = useSelector(getFilterPrice());
  const catalogSort = useSelector(getCatalogAfterSort(catalogFilter));

  useEffect(() => {
    dispatch(loadCatalogList());
  }, []);

  if (catalog.length === 0) return <h2>loading ....</h2>;
  return (
    <div className='d-flex flex-wrap justify-content-start mt-'>
      { catalogSort.map(cart => {
        return (<CardVertical key={ cart.id } data={ cart } />);
      }) }
    </div>
  );
};

export default CatalogCardList;
