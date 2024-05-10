import React from "react";
import '../stylesheets/Box.css';
import { BsCartPlus } from "react-icons/bs";

function Box({ productImage, productPrice, productName })
{
  return(
    <div className='box-card'>
      <img 
        className='box-image'
        src={require(`../images/${productImage}`)}
        alt='No product'
      />
      <div className='box-details'>
        <div>
        <p>{productName}</p>
          <p>{productPrice}</p>
        </div>

        <figure>
          <BsCartPlus className='box-plus-sign'/>
        </figure>
      </div>
    </div>
  );
}

export default Box;