import useTimer from '../hooks/useTimer'; // Relative path from TimerComponent to useTimer
import { formatTime } from '../utils/timeFormatter'; // Relative import for timeFormatter
import React from 'react'

const TimerComponent: React.FC = () => {
    const { elapsedTime, start, pause, resume, stop, timerState } = useTimer();

    return (
        <div className="flex flex-col items-center space-y-4">
            <div>Time: {formatTime(elapsedTime)}</div> {/* Display formatted time */}
            <button onClick={start} disabled={timerState === 'running'}>Start</button>
            <button onClick={pause} disabled={timerState !== 'running'}>Pause</button>
            <button onClick={resume} disabled={timerState !== 'paused'}>Resume</button>
            <button onClick={stop} disabled={timerState === 'stopped'}>Stop</button>
        </div>
    );
};

export default TimerComponent;
