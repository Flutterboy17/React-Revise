import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white px-8 py-6 rounded-md shadow-sm text-center">
        <p className="text-sm text-slate-500 mb-1">Timer</p>
        <h2 className="text-2xl font-semibold text-slate-700">
          {seconds} sec
        </h2>
      </div>
    </div>
  );
};

export default Timer;
