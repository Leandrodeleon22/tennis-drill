"use client";

import Ball from "@/components/Ball";
import { useEffect, useState } from "react";

export default function Home() {
  const options = [
    { id: 1, name: "left" },
    { id: 2, name: "right" },
  ];

  const [number, setNumber] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const startGenerating = () => {
    // Clear any existing interval before starting a new one
    if (intervalId) {
      clearInterval(intervalId);
    }

    // Set up a new interval to generate a number every 2 seconds
    const id = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 2) + 1;
      setTimeout(() => {
        setNumber(0);
      }, 1500);
      setNumber(randomNum);
    }, 3000);

    setIntervalId(id);
  };

  const stopGenerating = () => {
    if (intervalId) {
      clearInterval(intervalId); // Clear the interval
      setIntervalId(null); // Reset intervalId to null
      setNumber(0); // Reset number to 0
    }
  };

  return (
    <main className="w-4/5 mx-auto mt-[3rem] flex flex-col  ">
      <div className="flex justify-between">
        {options.map((option) => {
          return <Ball key={option.id} option={number} id={option.id} />;
        })}
      </div>
      {/* {number !== null && <p>Random Number: {number}</p>} */}
      <button
        onClick={startGenerating}
        className="bg-gray-300 mt-7 rounded-md py-2"
      >
        start
      </button>

      <button
        onClick={stopGenerating}
        className="bg-gray-300 mt-7 rounded-md py-2"
      >
        stop
      </button>
    </main>
  );
}
