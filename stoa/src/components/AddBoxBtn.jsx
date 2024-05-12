import React, { useState } from "react";
import '../stylesheets/AddBoxBtn.css';
import { LuPackagePlus } from "react-icons/lu";
import { SlClose } from "react-icons/sl";


function AddBoxBtn()
{
  const [addBoxModal, setaddBoxModal] = useState(false);

  const toggleAddBoxModal = () =>
  {
    setaddBoxModal(!addBoxModal);
  };

  if(addBoxModal)
  {
    document.body.classList.add('add-box-modal-active')
  }
  else
  {
    document.body.classList.remove('add-box-modal-active')
  }

  /*Formulario para agregar cajas
  input de nombre del producto
  input de precio del producto
  el como se llame para agregar imagen a la caja
  */

  return(
    <>
      <button 
      onClick={toggleAddBoxModal}
      className='btn-add-box-container'
      >
        <LuPackagePlus className="btn-logo" />
      </button>
      {addBoxModal && (
        <div className='add-box-modal-form'>
          <div 
          className = 'add-box-overlay-form'
          onClick = {toggleAddBoxModal} 
          >
          </div>
          
          <div className = 'add-box-modal-form-content'>
            <button 
            onClick = {toggleAddBoxModal}
            className='add-box-modal-form-close-btn'>
              <SlClose />   
            </button>
            
            <h2>Agregando producto</h2>
            <input placeholder="Nombre del producto"></input>
            <input placeholder="Precio del producto"></input>
            <button className='add-box-modal-form-ok-btn'>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default AddBoxBtn;