import React from 'react';
import './FeaturedProducts.scss';
import { Card } from '../Card/Card';

export const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      img2: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Long Sleeve Graphic T-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Coat',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/2890999/pexels-photo-2890999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Skirt',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/3422949/pexels-photo-3422949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Hat',
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe ad adipisci in
          assumenda libero dolorum ducimus, natus autem, pariatur quam! Omnis, rerum eum veniam
          blanditiis quisquam dignissimos voluptatem iure.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
