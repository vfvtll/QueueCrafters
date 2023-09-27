// components/Service.tsx
import React from 'react';

interface ServiceProps {
  name: string;
  price: number;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ name, price, description }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Цена: {price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Service;
