import * as React from 'react';
import './FlipUnitContainer.scss';
import { FunctionComponent } from 'react';
import { StaticCard } from '../Card/StaticCard';
import { AnimatedCard } from '../Card/AnimatedCard';

interface FlipUpContainerProps {
    digit: number,
    unit: string,
    shuffle: boolean,
}

export const FlipUnitContainer: FunctionComponent<FlipUpContainerProps> = (props: FlipUpContainerProps) => {
    // assign digit values
    let currentDigit: string = (props.digit).toString();
    let previousDigit: string = (props.digit - 1).toString();

    // to prevent a negative value
    if (props.unit !== "hours") {
      previousDigit = previousDigit === '-1' ? '59' : previousDigit;
    } else {
      previousDigit = previousDigit === '-1' ? '12' : previousDigit;
    }
  
    // add zero
    if (parseInt(currentDigit) < 10) {
      currentDigit = `0${currentDigit}`;
    }
    if (parseInt(previousDigit) < 10) {
      previousDigit = `0${previousDigit}`;
    }
  
    // shuffle digits
    const digit1 = props.shuffle ? previousDigit : currentDigit;
    const digit2 = !props.shuffle ? previousDigit : currentDigit;
  
    // shuffle animations
    const animation1 = props.shuffle ? "fold" : "unfold";
    const animation2 = !props.shuffle ? "fold" : "unfold";
  
    return (
        <div className={"flipUnitContainer"}>
          <StaticCard position={"upperCard"} digit={currentDigit} />
          <StaticCard position={"lowerCard"} digit={previousDigit} />
          <AnimatedCard digit={digit1} animation={animation1} />
          <AnimatedCard digit={digit2} animation={animation2} />
        </div>
      );
  };