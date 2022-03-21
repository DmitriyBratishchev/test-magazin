import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { generateArray } from '../../../utils/generateArray';
import { PaginationLink } from 'reactstrap';
import './pagination.css';
const Pagination = ({ itemsCount, pageSize, onPageChange, curentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  useEffect(() => {
    onPageChange(pageCount < curentPage ? pageCount || 1 : curentPage);
  }, [pageCount]);
  if (pageCount <= 1) return null;
  const pages = generateArray(1, pageCount);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <PaginationLink
          first
          onClick={ () => onPageChange(1) }
        />
        <PaginationLink
          previous
          onClick={ () => onPageChange(curentPage - 1 || 1) }
        />
        { pages.map((page) => {
          return (
            <li
              key={ page }
              className={ 'page-item ' + (page === curentPage ? 'active' : '') }
            >
              <a className="page-link" onClick={ () => onPageChange(page) }>
                { page }
              </a>
            </li>
          );
        }) }
        <PaginationLink
          next
          onClick={ () => onPageChange(pageCount - curentPage ? curentPage + 1 : pageCount) }
        />
        <PaginationLink
          last
          onClick={ () => onPageChange(pageCount) }
        />
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  curentPage: PropTypes.number.isRequired
};

export default Pagination;
