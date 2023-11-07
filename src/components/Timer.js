import React, { useState, useEffect } from "react";
import { Pressable, useWindowDimensions } from "react-native";
import { Paragraph } from "./Paragraph";
import { useSound } from "../hooks/useSound";
import classNames from "classnames";

const timerText = (time) => {
  const date = new Date(1000 * time);
  return date.toISOString().substring(14, 19);
};

export function Timer({ infusionTime }) {
  const { height } = useWindowDimensions();
  const [playSound] = useSound(require("../assets/beep.mp3"));
  const [start, setStart] = useState(false);
  const [steep, setSteep] = useState(0);
  const [time, setTime] = useState(infusionTime[steep]);
  const [timeText, setTimeText] = useState("Start timer");

  const isOnSmallScreen = height < 640;

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        const newTime = time - 1;
        setTime(newTime);
        setTimeText(timerText(newTime));
      }, 1000);

      if (time === 0) {
        setStart(false);
        setSteep(steep + 1);
        setTimeText("Start timer");
        playSound();
        clearInterval(timer);
      }

      return () => {
        clearInterval(timer);
      };
    }
  }, [start, time, steep]);

  const handleStart = (e) => {
    e.preventDefault();
    setStart(true);
    setTime(infusionTime[steep]);
    setTimeText(timerText(infusionTime[steep]));
  };

  return (
    <>
      <Paragraph
        paragraphClassName={classNames(
          "text-center",
          isOnSmallScreen ? "mt-1" : "mt-10"
        )}
      >
        You are on steep {steep + 1} of {infusionTime.length}
      </Paragraph>
      <Pressable
        className="m-auto mt-2 w-6/12 rounded border border-yellow-700 bg-yellow-500 px-4 py-2 font-bold text-slate-900 hover:bg-yellow-700 focus:bg-yellow-500 disabled:hover:bg-yellow-500 lg:w-3/12"
        onPress={(e) => handleStart(e)}
        color="#EAB308"
        role="button"
        disabled={start || steep === infusionTime.length}
      >
        <Paragraph paragraphClassName="text-center">{timeText}</Paragraph>
      </Pressable>
    </>
  );
}
