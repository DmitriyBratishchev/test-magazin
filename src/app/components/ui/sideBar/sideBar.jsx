import React from 'react';
import AccordionMenu from '../accordionMenu/accordionMenu';
// import { AccordionHeader, AccordionItem, Button, Card, CardBody, UncontrolledAccordion, UncontrolledCollapse } from 'reactstrap';
// import { ButtonDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import ButtonModalCategories from '../buttonModalCategories/buttonModalCategories';
import MenuListAccordion from '../menuListAccordion/menuListAccordion';
// import DropdownMenuCustom from '../dropdownMenu/dropdownMenu';

const initialMenu = [
  {
    text: 'item11111',
    link: 'item11111'
  },
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
  // const [isOpen, setOpen] = useState(false);
  return (
    <div className='col ms-4' style={ { maxWidth: '304px' } }>
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
      {/* <UncontrolledAccordion
        toggle={ function noRefCheck() {} }
        defaultOpen={ ['1'] }
        stayOpen
      >
        <AccordionItem>
          <AccordionHeader targetId="1">
            Accordion Item 1
          </AccordionHeader>
          <AccordionItem accordionId="1">
            <strong>
              This is the first item accordion body.
            </strong>
            You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the{ ' ' }
            <code>
              .accordion-body
            </code>
            , though the transition does limit overflow.
          </AccordionItem>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            Accordion Item 1
          </AccordionHeader>
          <AccordionItem accordionId="2">
            <strong>
              This is the first item accordion body.
            </strong>
            You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the{ ' ' }
            <code>
              .accordion-body
            </code>
            , though the transition does limit overflow.
          </AccordionItem>
        </AccordionItem>
      </UncontrolledAccordion>
      <div>
        <Button
          color="primary"
          id="toggler"
          style={ {
            marginBottom: '1rem'
          } }
        >
          Toggle
        </Button>
        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div> */}
    </div>
  );
};

export default SideBar;
