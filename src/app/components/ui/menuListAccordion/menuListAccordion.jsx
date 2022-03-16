import React from 'react';
import PropTypes from 'prop-types';
// import { Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import './menuListAccordion.css';
// import { Link } from 'react-router-dom';
// import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

// const initialMenu = [
//   {
//     text: 'item11111',
//     link: 'item11111'
//   },
//   {
//     text: 'AllCategories',
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
//             items: [
//               {
//                 text: 'item13',
//                 link: 'item13'
//               },
//               {
//                 text: 'item23',
//                 link: 'item23'
//               },
//               {
//                 text: 'item33',
//                 link: 'item33'
//               }
//             ]
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

const MenuListAccordion = ({ itemMenu }) => {
  // const [listMenu] = useState(itemMenu);
  // const [isOpen, setOpen] = useState(false);

  // const handleToggle = () => {
  //   setOpen(prev => !prev);
  // };

  // console.log(isOpen, setOpen, itemMenu);

  return (
    <div className="">
      { itemMenu.map((el, index) => {
        return (
          el.items
            ?
            <div key={ el.text + index } className="accordion" id={ `accordion${el.text}` }>
              <div className="accordion-item accordion-item-menuList mb-3">
                <h2 className="accordion-header" id={ el.text }>
                  <div
                    id={ el.text }
                    className={ `accordion-menuList accordion-button-menuList collapsed` }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={ `#collapse-${el.text}` }
                    aria-expanded="false"
                    aria-controls={ `collapse-${el.text}` }
                  >
                    { el.text }
                  </div>
                </h2>
                <div
                  id={ `collapse-${el.text}` }
                  className={ `accordion-collapse collapse ms-2` }
                  aria-labelledby={ el.text }
                  data-bs-parent={ `#accordion${el.text}` }
                >
                  <MenuListAccordion itemMenu={ el.items } />
                </div>
              </div>
            </div>
            : <div key={ el.link } className="mb-2"><Link to={ el.link }>{ el.text }</Link></div>
        );
      }) }
    </div>
  );
};

MenuListAccordion.propTypes = {
  itemMenu: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default MenuListAccordion;
