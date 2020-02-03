import React from 'react';
class Item extends React.Component {

  render() {
    const { label, path, icon } = this.props;

    return (
      <li className='item'>
        <img src={icon.src} alt={icon.alt} className={icon.alt}/>
        <span>{label}</span>
      </li>
    )
  }
}

export default Item;