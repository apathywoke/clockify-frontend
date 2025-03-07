import useTimer from '../hooks/useTimer';
import { formatTime } from '../utils/timeFormatter';
import React from 'react';

const TimerComponent: React.FC = () => {
    const { elapsedTime, start, pause, resume, stop, timerState } = useTimer();

    const handleStart = () => {
        start();
    };

    const handlePause = () => {
        pause();
    }

    const handleResume = () => {
        resume();
    };

    const handleStop = () => {
        stop();
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <div>Time: {formatTime(elapsedTime)}</div>
            {timerState === 'stopped' && (
                <button onClick={handleStart}>Start</button>
            )}
            {timerState === 'running' && (
                <button onClick={handlePause}>Pause</button>
            )}
            {timerState === 'paused' && (
                <button onClick={handleResume}>Resume</button>
            )}
            <button onClick={handleStop} disabled={timerState === 'stopped'}>Stop</button>
        </div>
    );
};

export default TimerComponent;