import React from "react";
import '../stylesheets/MenuBtn.css';

function MenuBtn({ id, transformX, isClicked })
{
  return(
    <div 
      className={ isClicked ? 'menu_bars change' : 'menu_bars'} 
      onClick={() => {transformX(id)}}
    >
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
    </div>
  );
}

export default MenuBtn;