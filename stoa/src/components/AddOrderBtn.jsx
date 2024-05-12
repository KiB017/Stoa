import React, { useState } from "react";
import '../stylesheets/AddOrderBtn.css';
import { BsCartPlus } from "react-icons/bs";
import { SlClose } from "react-icons/sl";

function AddOrderBtn()
{
  const [addOrderModal, setAddOrderModal] = useState(false);

  const toggleAddOrderModal = () =>
  {
    setAddOrderModal(!addOrderModal);
  };

  if(addOrderModal)
  {
    document.body.classList.add('add-order-form-actived');
  }
  else
  {
    document.body.classList.remove('add-order-form-actived');
  }

  return(
    <>
      <button 
      onClick={toggleAddOrderModal}
      className='btn-add-order-container'
      >
        <BsCartPlus className="btn-logo"/>
      </button>
      {
        (addOrderModal) &&
        <div className='add-order-form'>
          <div 
          className='add-order-form-overlay'
          onClick={toggleAddOrderModal}
          ></div>
          <div className='add-order-form-content'>
            <button 
            className='add-order-form-close-btn'
            onClick={toggleAddOrderModal}
            >
              <SlClose />
            </button>
            <h2>Haciendo pedido</h2>
            <p>Este es un texto de pedir orden</p>
            <button className='add-order-form-ok-btn'>
              OK
            </button>
          </div>
        </div>
      }
      
    </>
  );
}
export default AddOrderBtn;