import { useState } from "react";
import { authService } from "../services/authService";

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);

  const register = async (email: string, password: string, displayName: string) => {
    try {
      // Отправляем данные для регистрации на сервер
      const response = await authService.register(email, password, displayName); 

      // Сохраняем токен в localStorage (если нужно)
      if (response.token) {
        localStorage.setItem("authToken", response.token); 
      }

      setError(null); // Сброс ошибки, если регистрация прошла успешно
      // Тут можно делать редирект на другую страницу, например, на страницу входа

    } catch (err: any) {
      setError("Registration failed. Please try again.");
      console.error(err); // Вывод ошибки в консоль для отладки
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // Отправляем данные для входа на сервер
      const response = await authService.login(email, password);

      // Сохраняем токен в localStorage
      if (response.token) {
        localStorage.setItem("authToken", response.token);
      }

      setError(null); // Сброс ошибки, если вход успешен
      // Можно делать редирект на главную страницу или страницу профиля

    } catch (err: any) {
      setError("Invalid email or password.");
      console.error(err); // Вывод ошибки в консоль для отладки
    }
  };

  return { login, register, error };
};
