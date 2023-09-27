// components/UserList.tsx
import React from 'react';
import User from '../types/user'; // Импортируйте тип User из папки types

interface UserListProps {
  users: User[]; // Принимаем массив пользователей как свойство
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
