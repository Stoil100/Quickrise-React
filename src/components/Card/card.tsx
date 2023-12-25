// Import necessary modules
import React, { ReactNode } from 'react';
import './card.scss'; // Make sure to replace with your actual Sass file name
import { JsxElement } from 'typescript';

type Props = {
    title: string;
    description: string;
    children:JSX.Element;
};
export default function Card({ title, description,children }: Props) {
    return (
        <div className="card">
            <span className="icon">
               {children}
            </span>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="shine"></div>
            <div className="background">
                <div className="tiles">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div className={`tile tile-${i}`}></div>
                    ))}
                </div>
                {Array.from({ length: 3 }).map((_, i) => (
                    <div className={`line line-${i}`}></div>
                ))}
            </div>
        </div>
    );
}
