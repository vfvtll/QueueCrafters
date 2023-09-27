import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

// В компоненте CompanyPage
const CompanyPage: React.FC = () => {
  const router = useRouter();
  const { companyId } = router.query;

  // Предположим, что у вас есть данные о текущем пользователе и компании
  const currentUser = {
    id: 1,
    username: 'example_user',
    role: 'admin', // Роль пользователя в компании ('admin' означает администратора)
  };

  const company = {
    id: 1,
    name: 'Компания 1',
    owner: 1,
  };

  // Проверяем, имеет ли текущий пользователь право на добавление нового члена
  const canAddMember = currentUser.role === 'admin' || currentUser.id === company.owner;

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/company/${companyId}`);
      const data = await response.json();

      // Здесь обработайте данные о компании и обновите состояние компоненты
    } catch (error) {
      console.error('Ошибка при загрузке данных о компании:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [companyId]);

  return (
    <div>
      <h1>Страница компании</h1>
      <p>ID компании: {companyId}</p>
      {canAddMember && (
        <Link href={{pathname: `${companyId}/members`}}><button >Управлять членами компании</button></Link>
      )}
      {canAddMember && (
        <Link href={{pathname: `${companyId}/workspaces`}}><button >Управлять рабочими областями</button></Link>
      )}
      {/* Отобразите остальную информацию о компании */}
    </div>
  );
};

export default CompanyPage;
