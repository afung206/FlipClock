import * as React from 'react';
import './AnimatedCard.scss';
import { FunctionComponent } from 'react';

export interface AnimatedCardItemProps {
    animation: string;
    digit: string;
}

export const AnimatedCard : FunctionComponent<AnimatedCardItemProps> = (props: AnimatedCardItemProps) => {
    return (
        <div className={`AnimatedFlipCard ${props.animation}`}>
            <span>{props.digit}</span>
        </div>
    );
};