// CountdownTimer.js
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const targetDate = new Date("2025-01-01T00:00:00");
    const timeRemaining = targetDate - currentTime;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 bg-gray-200">
      <p className="text-lg">
        {timeRemaining.days} days, {timeRemaining.hours} hours,{" "}
        {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds
      </p>
    </div>
  );
};

export default CountdownTimer;
