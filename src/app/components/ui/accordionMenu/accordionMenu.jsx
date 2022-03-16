import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import './accordionMenu.css';
// import s from './accordionMenu.module.css';
// import { Link } from 'react-router-dom';
// import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

// const initialMenu = [
//   {
//     text: 'item11111',
//     link: 'item11111'
//   },
//   {
//     text: 'All Categories',
//     items: [
//       {
//         text: 'item11',
//         link: 'item11'
//       },
//       {
//         text: 'Electronics',
//         items: [
//           {
//             text: 'item1',
//             link: 'item1'
//           },
//           {
//             text: 'item2',
//             link: 'item2'
//           },
//           {
//             text: 'item3',
//             link: 'item3'
//           }
//         ]
//       },
//       {
//         text: 'Electronics1',
//         items: [
//           {
//             text: 'item4',
//             link: 'item4'
//           },
//           {
//             text: 'item5',
//             link: 'item5'
//           },
//           {
//             text: 'item6',
//             link: 'item6'
//           }
//         ]
//       }
//     ]
//   }
// ];

const AccordionMenu = ({ items, name, header }) => {
  // const [listMenu, setListMenu] = useState(itemMenu);
  // const [isOpen, setOpen] = useState(false);

  return (
    <div className="accordion" id={ `accordion${name}` }>
      <div className="accordion-item mb-3">
        <h2 className="accordion-header" id={ name }>
          <button className={ `accordion-accordionMenu accordion-button accordion-button-accordionMenu collapsed` } type="button" data-bs-toggle="collapse" data-bs-target={ `#collapse-${name}` } aria-expanded="false" aria-controls={ `collapse-${name}` }>
            { header }
          </button>
        </h2>
        <div id={ `collapse-${name}` } className="accordion-collapse collapse bg-color-accordionMenu" aria-labelledby={ name } data-bs-parent={ `#accordion${name}` }>
          { items.map(el => {
            return (
              <div key={ el }>
                <Label for={ el } className='ms-4 w-100'>
                  <Input className='me-3' type='checkbox' id={ el } />
                  { el }
                </Label>
              </div>
            );
          }) }
        </div>
      </div>
    </div>
  );
};

AccordionMenu.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  name: PropTypes.string,
  header: PropTypes.string
};

export default AccordionMenu;
