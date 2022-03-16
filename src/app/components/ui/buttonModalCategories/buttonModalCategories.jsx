import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import ListCategories from '../listCategories/listCategories';
import Icons from '../icons';
import s from './buttonModalCategories.module.css';

const ButtonModalCategories = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };
  // 'ps-3 pe-3 mb-3 d-flex align-items-center'
  return (
    <div style={ { marginBottom: '46px' } }>
      <button
        className={ s.button }
        onClick={ toggleOpen }
      >
        <Icons name='lines' width='18' height='12' color='#2264D1' />
        <span className={ s.text }>Departments</span>
      </button>
      <Modal
        isOpen={ isOpen }
        centered
        fullscreen="sm"
        size="xl"
        toggle={ toggleOpen }
      >
        <ModalHeader toggle={ toggleOpen }>
          Выберете категорию товаров
        </ModalHeader>
        <ModalBody>
          <ListCategories toggle={ toggleOpen } />
        </ModalBody>
      </Modal>
    </div>
  );
};

ButtonModalCategories.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default ButtonModalCategories;
