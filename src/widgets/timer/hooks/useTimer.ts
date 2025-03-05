import { useState, useRef, useEffect, useCallback } from 'react';
import { TimerMethods } from '../core/timerMethods'; // Adjust import path as needed

const useTimer = () => {
    const timer = useRef(new TimerMethods()).current;
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timerState, setTimerState] = useState<string>(timer.getState()); // Initialize with timer's initial state.
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const updateTimerState = useCallback(() => {
        console.log("Updating state:", timer.getState(), timer.getElapsedTime()); // Debugging log
        setElapsedTime(timer.getElapsedTime());
        setTimerState(timer.getState());
    }, [timer]);

    useEffect(() => {
        console.log("useEffect called - initial render or state change"); // Debugging log
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const start = useCallback(() => {
        if (timerState !== 'running') {
            timer.start();
            console.log("start() called - timer started");
            setTimerState('running'); // Ensure timerState is updated immediately


            if (!intervalRef.current) { // Start a new interval only if one isn't already running.
                intervalRef.current = setInterval(() => {
                    updateTimerState();
                }, 10);
            }
        }
    }, [timerState, timer, updateTimerState]);


    const pause = useCallback(() => {
        if (timerState === 'running') {
            timer.pause();
            console.log("pause() called - timer paused"); // Debugging log
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            setTimerState('paused');
        }
    }, [timerState, timer]);

    const resume = useCallback(() => {
        if (timerState === 'paused') {
            timer.continue();
            console.log("resume() called - timer resumed");
            setTimerState('running');

            if (!intervalRef.current) {
                intervalRef.current = setInterval(() => {
                    updateTimerState();
                }, 10);
            }
        }

    }, [timerState, timer, updateTimerState]);

    const stop = useCallback(() => {
        timer.stop();
        console.log("stop() called - timer stopped");
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTimerState('stopped');

    }, [timer]);

    useEffect(() => {
        console.log("Timer State:", timerState); // Log the timer state on every change
    }, [timerState]);

    return { elapsedTime, start, pause, resume, stop, timerState };
};

export default useTimer;