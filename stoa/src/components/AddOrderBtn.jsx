import React from "react";
import '../stylesheets/AddOrderBtn.css';
import { BsCartPlus } from "react-icons/bs";

function AddOrderBtn()
{
  return(
    <button className='btn-add-order-container'>
      <BsCartPlus className="btn-logo"/>
    </button>
  );
}
export default AddOrderBtn;