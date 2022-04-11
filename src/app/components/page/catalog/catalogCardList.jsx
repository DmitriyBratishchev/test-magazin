import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogList, loadCatalogList } from '../../../store/catalog';
// import { getFilterPrice } from '../../../store/filter';
import { getCatalogAfterSort } from '../../../store/sortBy';
import { getUserList, loadUsersList } from '../../../store/user';
import Pagination from '../../common/pagination/pagination';
import CardVertical from '../../ui/cardVertical/cardVertical';

const CatalogCardList = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(getCatalogList());
  // const catalogFilter = useSelector(getFilterPrice());
  const catalogSort = useSelector(getCatalogAfterSort()) || [];
  const usersList = useSelector(getUserList()) || [];

  const [curentPage, setCarentPage] = useState(1);
  const pageSize = 12;

  // console.log('usersList', usersList);

  useEffect(() => {
    dispatch(loadCatalogList());
    dispatch(loadUsersList());
  }, []);

  const hendelPageChange = (pageIndex) => {
    setCarentPage(pageIndex);
  };

  if (catalog.length === 0 && usersList.length === 0) return <h2>loading ....</h2>;

  const getCatagoryName = (id) => usersList[usersList.findIndex(el => el._id.toString() === id.toString())].name;

  const countCatalog = catalogSort.length;
  const catalogCrop = catalogSort.reduce((acc, card, index) => {
    if (index < curentPage * pageSize && index >= (curentPage * pageSize - pageSize)) {
      return [...acc, card];
    }
    return acc;
  }, []);
  // console.log('catalogCrop', catalogCrop);

  return (
    <>
      <div className='d-flex flex-wrap justify-content-start'>
        { catalogCrop.map(card => {
          return (
            <CardVertical key={ card.id } data={ { ...card, category: getCatagoryName(card.userId) } } />
          );
        }) }
      </div>
      <div className="d-flex justify-content-center">
        <Pagination
          itemsCount={ countCatalog }
          pageSize={ pageSize }
          curentPage={ curentPage }
          onPageChange={ hendelPageChange }
        />
      </div>
    </>
  );
};

export default CatalogCardList;
