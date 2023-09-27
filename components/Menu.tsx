// components/Menu.tsx
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>
          <Link href="/create-company">Создать компанию</Link>
        </li>
        {/* Другие ссылки */}
      </ul>
    </nav>
  );
};

export default Menu;
