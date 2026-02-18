import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import './Countdown.css';

interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

const Countdown = () => {
    const calculateTimeLeft = (): TimeLeft => {
        const eventDate = new Date('2026-02-27T09:00:00+05:30'); // 27th Feb 9:00 AM
        const now = new Date();
        const difference = eventDate.getTime() - now.getTime();

        let timeLeft: TimeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timerComponents: ReactNode[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        const value = timeLeft[interval as keyof TimeLeft];
        if (value !== undefined) {
             timerComponents.push(
                <div key={interval} className="countdown-item">
                    <span className="countdown-value">{value}</span>
                    <span className="countdown-label">{interval.toUpperCase()}</span>
                </div>
            );
        }
    });

    return (
        <div className="countdown-container">
            {timerComponents.length ? timerComponents : <span className="event-started">The Event Has Begun!</span>}
        </div>
    );
};

export default Countdown;
