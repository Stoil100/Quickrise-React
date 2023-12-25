// HeroSection.tsx
import React, { useEffect,RefObject } from 'react';
import "./Hero.scss"
interface HeroSectionProps {
    callToActionText1: RefObject<HTMLDivElement>;
    callToActionText2: RefObject<HTMLDivElement>;
    callToActionText3: RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    callToActionText1,
    callToActionText2,
    callToActionText3,
}) => {
    useEffect(() => {
        const textWarp = (text: RefObject<HTMLDivElement>) => {
            let iterations = 0;
            const datasetValue = text.current!.dataset.value;

            const interval = setInterval(() => {
                text.current!.textContent = (text.current!.textContent || '')
                    .split('')
                    .map((letter, index) => {
                        if (index < iterations && datasetValue) {
                            return datasetValue[index];
                        }
                        return String.fromCharCode(
                            65 + Math.floor(Math.random() * 26)
                        );
                    })
                    .join('');

                if (iterations >= (datasetValue || '').length)
                    clearInterval(interval);

                iterations += 1 / 4;
            }, 30);
        };

        const textWarpHero = () => {
            const elementsToWarp = [
                callToActionText1,
                callToActionText2,
                callToActionText3,
            ];

            elementsToWarp.forEach((element, index) => {
                setTimeout(() => textWarp(element), 3000 * (index + 1));
            });
        };

        textWarpHero();
        const intervalId = setInterval(textWarpHero, 10000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [callToActionText1, callToActionText2, callToActionText3]);
    return (
        <section className="hero-section">
            <div className="hero">
                <h2 ref={callToActionText1} data-value="ARE YOU READY">
                    ARE YOU READY
                </h2>
                <h2 ref={callToActionText2} data-value="TO ELEVATE">
                    TO ELEVATE
                </h2>
                <h2 ref={callToActionText3} data-value="YOUR BUSINESS">
                    YOUR BUSINESS
                </h2>
            </div>
        </section>
    );
};

export default HeroSection;
