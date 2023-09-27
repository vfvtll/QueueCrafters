// components/WorkspaceForm.tsx
import React, { useState } from 'react';
import Workspace from '../types/workspace'; // Импортируйте тип Workspace
import Service from '../types/service'; // Импортируйте тип Service

interface WorkspaceFormProps {
  onSubmit: (newWorkspace: Workspace) => void; // Принимаем функцию для обработки отправки формы
  services: Service[]; // Принимаем список доступных услуг
}

const WorkspaceForm: React.FC<WorkspaceFormProps> = ({ onSubmit, services }) => {
  const [newWorkspace, setNewWorkspace] = useState<Workspace>({
    id: 0, // В данном случае можно задать значение по умолчанию, оно будет заменено при отправке
    name: '',
    description: '',
    selectedServices: 0, // Выбранные услуги будут храниться в массиве
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setNewWorkspace({ ...newWorkspace, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Передайте данные новой рабочей области в функцию onSubmit
    onSubmit(newWorkspace);
    // Очистите форму после отправки
    setNewWorkspace({
      id: 0,
      name: '',
      description: '',
      selectedServices: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Название рабочей области:
        <input
          type="text"
          name="name"
          value={newWorkspace.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Описание:
        <textarea
          name="description"
          value={newWorkspace.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Выберите доступные услуги:
        <select
          name="selectedServices"
          multiple
          value={newWorkspace.selectedServices}
          onChange={handleChange}
          required
        >
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Добавить рабочую область</button>
    </form>
  );
};

export default WorkspaceForm;
