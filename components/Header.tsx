import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/create-company">Создать компанию</Link>
          </li>
          <li>
            <Link href="/register">Регистрация</Link>
          </li>
          <li>
            <Link href="/login">Войти</Link>
          </li>
          {/* Добавьте другие пункты меню здесь, если они есть */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
