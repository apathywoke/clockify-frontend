import { useState, useEffect, useRef } from 'react';


export type TimerState = 'running' | 'paused' | 'stopped';

const useTimer = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timerState, setTimerState] = useState<TimerState>('stopped');
    const [startTime, setStartTime] = useState<number | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


    const start = () => {
        if (timerState !== 'running') {
            setStartTime(Date.now() - elapsedTime); // Account for existing elapsed time
            setTimerState('running');
        }
    };


    const pause = () => {
        if (timerState === 'running') {
            clearInterval(intervalRef.current);  // clear the interval
            intervalRef.current = null;         // set to null, otherwise it will clear the new interval when the component unmounts
            setTimerState('paused');
        }
    };

    const resume = () => {
        if (timerState === 'paused') {
            setStartTime(Date.now() - elapsedTime);
            setTimerState('running');
        }
    };

    const stop = () => {
        if (timerState !== 'stopped') {
            clearInterval(intervalRef.current); // clear the interval
            intervalRef.current = null;         // set to null, otherwise it will clear the new interval when the component unmounts
            setElapsedTime(0);
            setTimerState('stopped');
            setStartTime(null);
        }
    };

    const startInterval = () => {
        if (timerState === 'running' && startTime !== null) {
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 10);
        }
    };

    useEffect(() => {
        startInterval();  // Call the extracted function
        return () => clearInterval(intervalRef.current); // Simplified cleanup
    }, [timerState, startTime]);

    return { elapsedTime, start, pause, resume, stop, timerState };
};

export default useTimer;