// api/user.ts
import axios from 'axios';

export const getUserRole = async (): Promise<string | null> => {
  try {
    // Здесь выполните запрос к вашему серверу или API для получения роли пользователя
    const response = await axios.get('/api/getUserRole'); // Замените на фактический URL

    if (response.status === 200) {
      return response.data.role; // Предполагается, что сервер возвращает роль
    }

    return null;
  } catch (error) {
    console.error('Ошибка при получении роли пользователя:', error);
    return null;
  }
};

export const login = async (credentials: { email: string, password: string }): Promise<string | null> => {
  try {
    const response = await axios.post('/api/login', credentials); // Замените на фактический URL и обработку запроса

    if (response.status === 200 && response.data.token) {
      const token = response.data.token;
      localStorage.setItem('token', token); // Сохранение токена в localStorage
      return token;
    }

    return null;
  } catch (error) {
    console.error('Ошибка при попытке входа:', error);
    return null;
  }
};

export const register = async (userData: { username: string, email: string, password: string }): Promise<string | null> => {
    try {
      const response = await axios.post('/api/register', userData); // Замените на фактический URL и обработку запроса
  
      if (response.status === 201 && response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token); // Сохранение токена в localStorage
        return token;
      }
  
      return null;
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      return null;
    }
  };
