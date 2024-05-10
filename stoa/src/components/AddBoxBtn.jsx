import React from "react";
import '../stylesheets/AddBoxBtn.css';
import { LuPackagePlus } from "react-icons/lu";


function AddBoxBtn()
{
  return(
    <button className='btn-add-box-container'>
      <LuPackagePlus className="btn-logo" />
    </button>
  );
}
export default AddBoxBtn;