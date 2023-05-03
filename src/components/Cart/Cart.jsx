import React from 'react';
import './Cart.scss';
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      img2: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Long Sleeve Graphic T-shirt',
      desc: 'Long Sleeve Graphic T-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Coat',
      desc: 'Long Sleeve Graphic T-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <div className="item">
        <h1>Products in your cart</h1>
        {data?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price"> 1 * ${item.price}</div>
            </div>
            <DeleteIcon className="delete" />
          </div>
        ))}
      </div>
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PRECEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};
