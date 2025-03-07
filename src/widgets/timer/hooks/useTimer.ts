// useTimer.ts  (The "backend" logic)
import { useState, useEffect, useRef, useCallback } from 'react';

export type TimerState = 'running' | 'paused' | 'stopped';

const useTimer = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timerState, setTimerState] = useState<TimerState>('stopped');
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


    const start = useCallback(() => {
        if (timerState !== 'running') {
            setTimerState('running');
        }
    }, [timerState]);

    const pause = useCallback(() => {
        if (timerState === 'running') {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
            setTimerState('paused');
        }
    }, [timerState]);

    const resume = useCallback(() => {
        if (timerState === 'paused' || timerState === 'stopped') { // Allow resume from stopped as well
            setTimerState('running');
        }
    }, [timerState]);


    const stop = useCallback(() => {
        if (timerState !== 'stopped') {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
            setElapsedTime(0);
            setTimerState('stopped');
        }
    }, [timerState]);


    useEffect(() => {
        let startTime: number | null = null; // Moved startTime inside useEffect

        if (timerState === 'running') {
            startTime = Date.now() - elapsedTime; // Initialize only when running
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime!);
            }, 10);

        }

        return () => clearInterval(intervalRef.current!); // Clear on state change or unmount
    }, [timerState, elapsedTime]);



    return { elapsedTime, start, pause, resume, stop, timerState };
};

export default useTimer;
