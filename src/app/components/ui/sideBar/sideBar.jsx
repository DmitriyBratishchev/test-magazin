import React from 'react';
import AccordionMenu from '../accordionMenu/accordionMenu';
import ButtonModalCategories from '../buttonModalCategories/buttonModalCategories';
import MenuListAccordion from '../menuListAccordion/menuListAccordion';

const initialMenu = [
  {
    text: 'AllCategories',
    items: [
      {
        text: 'item11',
        link: 'item11'
      },
      {
        text: 'Electronics',
        items: [
          {
            text: 'item3',
            items: [
              {
                text: 'item13',
                link: 'item13'
              },
              {
                text: 'item23',
                link: 'item23'
              },
              {
                text: 'item33',
                link: 'item33'
              }
            ]
          },
          {
            text: 'item1',
            link: 'item1'
          },
          {
            text: 'item2',
            link: 'item2'
          }
        ]
      },
      {
        text: 'Electronics1',
        items: [
          {
            text: 'item4',
            link: 'item4'
          },
          {
            text: 'item5',
            link: 'item5'
          },
          {
            text: 'item6',
            link: 'item6'
          }
        ]
      }
    ]
  }
];

const SideBar = () => {
  return (
    <div className='col ms-4 me-3' >
      <ButtonModalCategories />
      <div className="ms-4">
        <MenuListAccordion itemMenu={ initialMenu } />
      </div>
      <AccordionMenu
        name='test1'
        header='Collapsed filters'
        items={ ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'] }
      />
      <AccordionMenu
        name='testeee'
        header='Collapsed filters2'
        items={ ['item 6', 'item 7', 'item 8', 'item 9', 'item 10'] }
      />
    </div>
  );
};

export default SideBar;
