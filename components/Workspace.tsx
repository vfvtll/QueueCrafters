// components/Workspace.tsx
import React from 'react';
import Service from '../types/service';

interface WorkspaceProps {
  name: string;
  description: string;
  services: Service[];
}

const Workspace: React.FC<WorkspaceProps> = ({ name, description, services }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Услуги:</h3>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <strong>{service.name}</strong> - Цена: {service.price}
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workspace;
