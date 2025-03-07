// TimerContext.tsx (Context for shared timer state)
import React, { createContext, useContext } from 'react';
import useTimer from './useTimer';

const TimerContext = createContext<ReturnType<typeof useTimer> | null>(null);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <TimerContext.Provider value={useTimer()}>
        {children}
    </TimerContext.Provider>
);


export const useTimerContext = () => {
    const context = useContext(TimerContext);
    if (!context) {
        throw new Error('useTimerContext must be used within a TimerProvider');
    }
    return context;
};
