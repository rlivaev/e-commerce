import React from 'react';
import './List.scss';
import { Card } from '../../components/Card/Card';

export const List = () => {
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
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
