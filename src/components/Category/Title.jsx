import React, { useState } from 'react';
import SettingCategoryBtn from './SettingCategoryBtn';


const Title = ({titleName}) => {
  const [isOpen, setOpen] = useState(false);
  const clssName = ["title"]
  const togglePopup = () => {
    setOpen(prevState => !prevState);
  }
  return (
    <>
    <div className={clssName.join(" ")}>
      <span>{titleName}</span>
      <SettingCategoryBtn togglePopup={togglePopup}/>
      {isOpen ? <div className="test">tét</div> : ""}
    </div>
    
    </>
  )
}

export default Title;