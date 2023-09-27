// pages/company/[companyId]/members.tsx
import React from 'react';
import { useRouter } from 'next/router';
import UserForm from '../../../components/UserForm'; // Пример импорта формы
import UserList from '../../../components/UserList'; // Пример импорта списка пользователей
import User from '../../../types/user';


const MembersPage: React.FC = () => {
    const router = useRouter();
    const { companyId } = router.query;
  
    // Здесь вы можете использовать состояние или другие средства для хранения текущих пользователей компании
    const [users, setUsers] = React.useState<User[]>([]); // Предположим, что User - это интерфейс пользователя
  
    // Загрузка текущих пользователей компании (замените этот код на фактическую логику)
    React.useEffect(() => {
      if (companyId) {
        // Здесь загрузите текущих пользователей компании на основе companyId с сервера
        // и установите их в состояние users
        const fetchedUsers = [{
            id: 1,
            username: 'example_user',
            email: 'test@test.com',
            role: 'admin', // Роль пользователя в компании ('admin' означает администратора)
          }]/* Загрузите пользователей с сервера */;
        setUsers(fetchedUsers);
      }
    }, [companyId]);
  
    const handleAddMemberSubmit = async (newUser: User) => {
      try {
        // Здесь отправьте данные нового пользователя на сервер и добавьте его к текущим пользователям
        // после успешного добавления
        // Примерно так: const response = await fetch('/api/addMember', { method: 'POST', body: JSON.stringify(newUser) });
        // Затем обновите состояние users с новым пользователем
        // После успешного добавления пользователь будет отображен в списке
      } catch (error) {
        console.error('Ошибка при добавлении пользователя:', error);
      }
    };
  
    return (
      <div>
        <h1>Управление членами компании</h1>
        <p>ID компании: {companyId}</p>
        <UserList users={users} /> {/* Отобразите текущих пользователей компании */}
        <UserForm onSubmit={handleAddMemberSubmit} /> {/* Форма для добавления новых пользователей */}
      </div>
    );
  };
  
  export default MembersPage;
  