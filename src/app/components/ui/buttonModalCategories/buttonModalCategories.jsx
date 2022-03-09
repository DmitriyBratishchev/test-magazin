import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import ListCategories from '../listCategories/listCategories';
import Icons from '../icons';

const ButtonModalCategories = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };
  return (
    <>
      <Button
        className='ps-3 pe-3 mb-3 d-flex align-items-center'
        color="primary"
        onClick={ toggleOpen }
        outline
      >
        <Icons name='lines' width='18' height='12' color='#2264D1' />
        <span className='ms-4 me-4' style={ { fontSize: '24px' } }>Departments</span>
      </Button>
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
    </>
  );
};

ButtonModalCategories.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default ButtonModalCategories;
