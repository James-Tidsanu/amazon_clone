import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
   <div className='checkout'>
    <div className='checkout__left'>
      <img
       className='checkout__ad' src='https://m.media-amazon.com/images/G/02/UK_CCMP/AIS/577-HL-LX-Maple-770x70-1._CB607807473_.jpg'
       alt=''
      />
      <div>
        <h2 className='checkout__title'>Your Shopping Basket</h2>
      </div>

      <div className='checkout__right'>
        <h2></h2>
      </div>
    </div>
   </div>
  );
}
export default Checkout;