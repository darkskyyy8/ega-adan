// pages/Countdown.js
import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-28") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center items-center py-4">
      <div className="text-center">
        <div className="flex ">
          <h2 className="bg-[#9B7651] w-20 h-20 rounded justify-center flex flex-col">
            {timeLeft.days}
            <p>days</p>
          </h2>
          <div className="px-2">
            <h2 className="bg-[#9B7651] w-20 h-20 rounded justify-center flex flex-col">
              {timeLeft.hours} <p>Hours</p>
            </h2>
          </div>
          <div className="bg-[#9B7651] w-20 h-20 rounded justify-center flex flex-col">
            {timeLeft.minutes}
            <p> Minutes</p>
          </div>
          <div className="pl-2">
            <h2 className="bg-[#9B7651] w-20 h-20 rounded justify-center flex flex-col">
              {timeLeft.seconds} <p>Seconds</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
