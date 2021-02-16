import * as React from 'react';
import './StaticCard.scss';
import { FunctionComponent } from 'react';

export interface StaticCardItemProps {
    position: string;
    midday?: string;
    digit: String;
}

export const StaticCard : FunctionComponent<StaticCardItemProps> = (props: StaticCardItemProps) => {
    return (
      <div className={`StaticFlipCard ${props.position}`}>
        <span>{props.digit}</span>
      </div>
    );
};