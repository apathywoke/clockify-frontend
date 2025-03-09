// TimerUI.tsx (UI Component)
import React from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';
import { formatTime } from '../../index.tsx'; // Import formatTime function
import { useTimerContext } from '../../index.tsx'; // Import the hook

interface TimerUIProps {
    showControls?: boolean;
}

const TimerUI: React.FC<TimerUIProps> = ({ showControls = true }) => {
    const { elapsedTime, timerState, start, pause, resume, stop } = useTimerContext();

    const handleStartPauseResume = () => {
        switch (timerState) {
            case 'stopped':
                start(); // Directly call start when stopped
                break;
            case 'running':
                pause();
                break;
            case 'paused':
                resume();
                break;
        }
    };

    return (
        <div className="flex flex-col items-center space-y-3">
            <div className="text-5xl font-bold text-[#191919]">{formatTime(elapsedTime)}</div>
            {showControls && (
                <div className="flex flex-row space-x-4">
                    {/* Start/Pause/Resume button */}
                    <button onClick={handleStartPauseResume
                    } className="flex flex-row items-center font-bold text-[#d9d9d9]">
                        {timerState === 'running' ?
                            <FaPause className="mr-2"/> : <FaPlay className="mr-2"/>}
                        {timerState === 'running' ? "Pause" : "Start" }
                    </button>

                    {/* Stop button */}
                    {(timerState === 'running' || timerState === 'paused') && (
                        <button onClick={stop}
                        className="flex flex-row items-center font-bold text-[#d9d9d9]">
                            <FaStop className="mr-2"/>
                            Stop
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default TimerUI;
