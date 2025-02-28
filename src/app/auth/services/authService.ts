import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/auth' });

const register = async (email: string, password: string, displayName: string) => {
  try {
    const { data } = await API.post('/register', { email, displayName, password });
    console.log("You are registered in Clockify! Thank you");
    return data.token;
  } catch (err: any) {
    console.error('Registration error:', err.response?.data);
    throw err;  // Пробрасываем ошибку, чтобы она была обработана в useAuth
  }
};

const login = async (email: string, password: string) => {
  try {
    const { data } = await API.post('/login', { email, password });
    console.log("You are loggined in!");
    return data.token;
  } catch (err: any) {
    console.error('Login Error: ', err.response?.data);
    console.log("Some trouble with loggining in.");
    throw err;
  }
};

export const authService = { register, login }; // Экспортируем объект
