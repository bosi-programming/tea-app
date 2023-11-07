import { useState, useEffect } from "react";
import { Audio } from "expo-av";

const sound = new Audio.Sound();

export const useSound = (soundUrl) => {
  const [playedOnce, setPlayedOnce] = useState(false);
  const getSound = async () => {
    await sound.loadAsync(soundUrl);
  };

  const playSound = async () => {
    if (!playedOnce) {
      await sound.playAsync();
      setPlayedOnce(true);
    } else {
      await sound.replayAsync();
    }
  };

  useEffect(() => {
    getSound();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return [playSound];
};
