import * as React from 'react';
import './FlipClock.scss';
import { useState, useEffect } from 'react';
import { FunctionComponent } from 'react';
import { FlipUnitContainer } from '../FlipClock/FlipUnitContainer'

export const FlipClock: FunctionComponent = () => {
    const [hours, setHours] = useState(0);
    const [hoursShuffle, setHoursShuffle] = useState(true);

    const [minutes, setMinutes] = useState(0);
    const [minutesShuffle, setMinutesShuffle] = useState(true);

    const [seconds, setSeconds] = useState(0);
    const [secondsShuffle, setSecondsShuffle] = useState(true);

    let timerID: any;

    useEffect(() => {
        timerID = setInterval(() => {
          console.log("FlipClock::Updating time...");
          return updateTime();
        }, 50);
        return () => {
            clearInterval(timerID);
        }
    }, [hours, minutes, seconds]);
  
    const updateTime = () => {
      const time = new Date();
      const currentMinutes = time.getMinutes();
      const currentSeconds = time.getSeconds();
      let currentHours = time.getHours() % 12;
      currentHours = currentHours ? currentHours : 12;
  
      if (currentHours !== hours) {
        setHours(currentHours);
        setHoursShuffle(!hoursShuffle);
      }
      if (currentMinutes !== minutes) {
        setMinutes(currentMinutes);
        setMinutesShuffle(!minutesShuffle)
      }

      if (currentSeconds !== seconds) {
        setSeconds(currentSeconds);
        setSecondsShuffle(!secondsShuffle);
      }
    };

    return (
        <>
            <div className={"flipClock"}>
                <FlipUnitContainer
                    unit={"hours"}
                    digit={hours}
                    shuffle={hoursShuffle}
                />
                <FlipUnitContainer
                    unit={"minutes"}
                    digit={minutes}
                    shuffle={minutesShuffle}
                />
                <FlipUnitContainer
                    unit={"seconds"}
                    digit={seconds}
                    shuffle={secondsShuffle}
                />
            </div>
        </>
    );
}