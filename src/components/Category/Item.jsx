import React from 'react';
import { NavLink } from 'react-router-dom';

class Item extends React.Component {

  render() {
    const { label, path, icon } = this.props;

    return (
      <NavLink exact to={path}>
        <li className='item'>
          <img src={icon.src} alt={icon.alt} className={icon.alt}/>
          <span>{label}</span>
        </li>
      </NavLink>
    )
  }
}

export default Item;