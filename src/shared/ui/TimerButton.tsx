import { useTimerStore } from '../index';
import TimerDisplay from './TimerDisplay';  // Импортируем компонент TimerDisplay

const TimerButton = () => {
  const { isRunning, time, continueTimer, pauseTimer, startTimer, stopTimer, logAction } = useTimerStore();

  const handleClick = () => {
    if (isRunning) {
      pauseTimer();
      logAction('pause');
    } else {
      continueTimer();
      logAction('unpause');
    }
  };

  const handleStopClick = () => {
    stopTimer();
    logAction('stop');
  };

  const handleStartClick = () => {
    startTimer();
    logAction('start');
  };

  return (
    <div>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
      <button onClick={handleClick}>
        {isRunning ? 'Pause' : 'Unpause'}
      </button>
      <TimerDisplay /> {/* Отображаем текущее время с использованием компонента TimerDisplay */}
    </div>
  );
};

export default TimerButton;