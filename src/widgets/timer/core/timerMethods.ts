export type TimerState = 'running' | 'paused' | 'stopped';

export class TimerMethods {
    private startTime: number | null = null;
    private pauseTime: number | null = null;
    private elapsedTime: number = 0;
    private state: TimerState = 'stopped';

    start() {
        if (this.state !== 'running') {
            if (this.state === 'stopped') {
                this.startTime = Date.now();
            } else if (this.state === 'paused') {
                this.pauseTime = null; // Clear the pause time when restarting.
            }
            this.state = 'running';
        }
    }

    pause() {
        if (this.state === 'running') {
            this.pauseTime = Date.now();
            this.elapsedTime = this.getElapsedTime();
            this.state = 'paused';
        }
    }

    
    stop() {
        if (this.state !== 'stopped') {
            this.elapsedTime = this.getElapsedTime();
            this.startTime = null;
            this.pauseTime = null;
            this.state = 'stopped';
        }
    }


    continue() {
        if (this.state === 'paused') {
            this.startTime = Date.now() - this.elapsedTime;
            this.pauseTime = null;
            this.state = 'running';
        }
    }

    getElapsedTime(): number {  // Example implementation. Adjust as needed.
        if (this.startTime === null) {
          return 0;
        }
        const now = this.pauseTime !== null ? this.pauseTime : Date.now();
        return now - this.startTime;
    }

        getState(): TimerState {
            return this.state;
        }

    getElapsed(): number {
        return this.elapsedTime;
    }
}