import { create } from 'zustand';

interface TimerState {
  time: number; // Время в секундах
  totalTime: number; // Суммарное время, которое пользователь потратил на таймер
  isRunning: boolean; // Состояние таймера
  format: 'hh:mm' | 'dd:hh:mm'; // Формат отображения
  intervalId: number | null; // ID интервала для управления отсчетом времени
  logs: string[]; // Логирование действий
  continueTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  setFormat: (format: 'hh:mm' | 'dd:hh:mm') => void;
  startTimer: () => void;
  stopTimer: () => void;
  logAction: (action: string) => void; // Логирование действий
  addTimeToUser: (time: number) => void; // Добавление времени в массив по дате
}

const useTimerStore = create<TimerState>((set) => ({
  time: 0,
  totalTime: 0,
  isRunning: false,
  format: 'hh:mm',
  intervalId: null, // Изначально интервал не задан
  logs: [], // Логи действий

  continueTimer: () => set({ isRunning: true }),

  pauseTimer: () => set({ isRunning: false }),

  resetTimer: () => set(() => ({ time: 0, isRunning: false })),

  setFormat: (format) => set(() => ({ format })),

  startTimer: () => {
    const intervalId = setInterval(() => {
      set((state) => ({ time: state.time + 1 }));
    }, 1000);
    set({ intervalId, isRunning: true });
    set((state) => {
      state.logAction('start');
      return state;
    });
  },

  stopTimer: () => {
    set((state) => {
      if (state.intervalId) clearInterval(state.intervalId); // Останавливаем интервал, если он есть
      state.addTimeToUser(state.time); // Добавляем время в суммарное время
      return { isRunning: false, intervalId: null, time: 0 };
    });
    set((state) => {
      state.logAction('stop');
      return state;
    });
  },

  logAction: (action) => {
    const timestamp = new Date().toISOString(); // Время действия
    const log = `${timestamp} - ${action}`;
    set((state) => ({
      logs: [...state.logs, log]
    }));
    console.log(log); // Логирование в консоль
    // Отправка в базу данных
    // здесь может быть код для отправки в базу данных, например, с использованием axios
  },

  addTimeToUser: (time) => {
    const dateKey = new Date().toISOString().split('T')[0]; // Ключ для массива — это дата (год-месяц-день)
    set((state) => {
      const storedData = JSON.parse(localStorage.getItem(dateKey) || '[]');
      storedData.push(time);
      localStorage.setItem(dateKey, JSON.stringify(storedData)); // Сохраняем данные в localStorage или отправляем в базу данных
      return { totalTime: state.totalTime + time };
    });
  },
}));

export default useTimerStore;