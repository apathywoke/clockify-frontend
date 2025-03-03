import { useTimerStore } from '../index';
import { formatTime, formatDate } from '../index';

const TimerDisplay = () => {
  const { time, format } = useTimerStore();

  return (
    <h1>
      {format === 'hh:mm' ? formatTime(time) : formatDate(time)}
    </h1>
  );
};

export default TimerDisplay;
