import React from 'react';
import SettingCategoryBtn from './SettingCategoryBtn';

const Title = ({titleName}) => {
  return (
    <div className="title">
      <span>{titleName}</span>
      <SettingCategoryBtn />
    </div>
  )
}

export default Title;