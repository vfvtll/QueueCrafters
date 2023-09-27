// components/UserForm.tsx
import React, { useState } from 'react';
import User from '../types/user'; // Импортируйте тип User из папки types

interface UserFormProps {
  onSubmit: (user: User) => void; // Принимаем функцию для обработки отправки формы
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [newUser, setNewUser] = useState<User>({
    id: 0, // В данном случае можно задать значение по умолчанию, оно будет заменено при отправке
    username: '',
    email: '',
    role: '', // Необходимо предоставить пользователю возможность выбрать роль
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Передайте данные нового пользователя в функцию onSubmit
    onSubmit(newUser);
    // Очистите форму после отправки
    setNewUser({
      id: 0,
      username: '',
      email: '',
      role: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Добавить нового пользователя</h2>
      <label>
        Имя пользователя:
        <input
          type="text"
          name="username"
          value={newUser.username}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Роль:
        <input
          type="text"
          name="role"
          value={newUser.role}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default UserForm;
