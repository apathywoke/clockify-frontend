export type TimerState = 'running' | 'paused' | 'stopped';

export class TimerMethods {
    private startTime: number | null = null;
    private pauseTime: number | null = null;
    private elapsedTime: number = 0; // Store elapsed time internally
    private state: TimerState = 'stopped';

    start() {
        if (this.state !== 'running') {
            if (this.state === 'stopped') {
                this.startTime = Date.now();
                this.elapsedTime = 0; // Reset elapsed time when starting from stopped
                console.log("TimerMethods.start() called - startTime:", this.startTime);  // Log startTime
            }
            this.state = 'running';
        }
    }

    pause() {
        if (this.state === 'running') {
            this.pauseTime = Date.now();
            this.elapsedTime = this.getElapsedTime();
            this.state = 'paused';
            console.log("TimerMethods.pause() called - pauseTime:", this.pauseTime, "elapsedTime:", this.elapsedTime); // Log pause details
        }
    }

    continue() {
        if (this.state === 'paused') {
            const now = Date.now();
            const pauseDuration = now - (this.pauseTime || 0); // Handle potential null
            this.startTime = now - (this.elapsedTime + pauseDuration); // Adjust startTime
            this.pauseTime = null;
            this.state = 'running';
        }
    }

    stop() {
        if (this.state !== 'stopped') {
            this.startTime = null;
            this.pauseTime = null;
            this.elapsedTime = 0; // Reset elapsed time when stopped
            this.state = 'stopped';
        }
    }

    getElapsedTime(): number {
        if (!this.startTime) {
            console.log("getElapsedTime() called - startTime is null"); // Check for null startTime
            return 0;
        }

        const now = this.pauseTime || Date.now();
        return now - this.startTime;
    }

    getState(): TimerState {
        return this.state;
    }
}