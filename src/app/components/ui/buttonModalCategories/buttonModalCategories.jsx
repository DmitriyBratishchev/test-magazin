import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import ListCategories from '../listCategories/listCategories';

const ButtonModalCategories = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  console.log(children);
  return (
    <>
      <Button
        className='mt-3'
        color="primary"
        onClick={ toggleOpen }
        outline
      >
        Категории
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
