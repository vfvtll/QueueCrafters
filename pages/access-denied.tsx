// pages/access-denied.tsx
import Link from 'next/link';

const AccessDenied: React.FC = () => {
  return (
    <div>
      <h1>Доступ запрещен</h1>
      <p>У вас нет прав для просмотра этой страницы.</p>
      <Link href="/">
        <a>Вернуться на главную</a>
      </Link>
    </div>
  );
};

export default AccessDenied;
