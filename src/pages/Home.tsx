import React, { useEffect, useRef, RefObject } from 'react';
import HeroSection from '../components/Home/Hero';
import FinalMessageSection from '../components/Home/FinalMessage';
import GrowthSection from '../components/Home/GrowthSection';
import Card from '../components/Card/card';
import './Home.scss';
import image1 from '../assets/lucas-kapla-wQLAGv4_OYs-unsplash.jpg';
import image2 from '../assets/timothy-dachraoui-fDfldVJEBqU-unsplash.jpg';
import image3 from '../assets/dollar-gill-sF8X2NsYxUs-unsplash.jpg';
import image4 from '../assets/noah-naf-qhfxY3X6JV0-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cardText = [
    {
        title: 'Revenue growth',
        description:
            ' A consistent increase in revenue over time is a strong indicator of business growth. It shows that your products or services are in demand, and you are effectively attracting and retaining customers.',
    },
    {
        title: 'Customer satisfaction',
        description:
            'Satisfied customers are the lifeblood of any successful business. When customers are happy with your products or services, they are more likely to become repeat customers and refer others to your business.',
    },
    {
        title: 'Innovation',
        description:
            '  Embracing innovation is crucial for staying competitive and driving business growth. By continuously exploring new ideas, technologies, and approaches, you can differentiate your business from competitors, improve your products or services, and meet evolving customer demands.',
    },
    {
        title: 'Market Expansion',
        description:
            ' Expanding into new markets or reaching a broader customer base is a positive sign of business growth. It indicates that your offerings have resonated with a larger audience and that you have successfully identified new opportunities.',
    },
    {
        title: 'Operational Efficiency',
        description:
            '   Operational efficiency refers to the ability to optimize resources, streamline processes, and maximize productivity. By identifying and eliminating bottlenecks, automating repetitive tasks, and improving workflow, you can enhance efficiency and reduce costs.',
    },
    {
        title: 'Team Engagement',
        description:
            ' Engaged employees are more motivated, productive, and committed to achieving business goals. A highly engaged team is more likely to collaborate effectively, innovate, and contribute to the success of your business.',
    },
];

export default function HomePage() {
    const callToActionText1 = useRef(null);
    const callToActionText2 = useRef(null);
    const callToActionText3 = useRef(null);
    const ctaElements = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const observeElements = (
            elements: Array<HTMLDivElement | null>,
            classname: string,
            threshold: number
        ) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add(classname);
                        } else {
                            entry.target.classList.remove(classname);
                        }
                    });
                },
                {
                    threshold: threshold,
                }
            );

            elements.forEach((el) => el && observer.observe(el));
            return observer;
        };
        const elementsToObserve = ctaElements.current;
        const observerOne = observeElements(
            elementsToObserve,
            'CTA-animation',
            0.65
        );
        return () => observerOne.disconnect();
    }, []);

    return (
        <>
            <HeroSection
                callToActionText1={callToActionText1}
                callToActionText2={callToActionText2}
                callToActionText3={callToActionText3}
            />
            <section className="main">
                <div className="message-box right-box">
                    <i className="fa-solid fa-up-right"></i>
                    <div className="message">
                        <h2>Every business struggles </h2>
                        <p>
                            {' '}
                            Feeling stuck? Seeking progress? We're here to help
                            you break through plateaus and{' '}
                            <span>RISE ABOVE MEDIOCRITY</span>! But first, let
                            us know your struggles. Share with us the challenges
                            you're facing.
                        </p>
                    </div>
                </div>

                <div className="main-content">
                    <div
                        className="CTA-text CTA"
                        id="first-text"
                        ref={(el) => (ctaElements.current[0] = el)}
                    >
                        <p>
                            Do you lack <span>CREATIVITY?</span>{' '}
                        </p>
                    </div>

                    <div
                        className="CTA-image CTA"
                        id="first-image"
                        ref={(el) => (ctaElements.current[1] = el)}
                    >
                        <img src={image1} alt="" />
                    </div>

                    <div
                        className="CTA-image CTA"
                        id="second-image"
                        ref={(el) => (ctaElements.current[2] = el)}
                    >
                        <img src={image2} alt="" />
                    </div>

                    <div
                        className="CTA-text CTA"
                        id="second-text"
                        ref={(el) => (ctaElements.current[3] = el)}
                    >
                        <p>
                            Or perhaps <span>VISIBILITY?</span>
                        </p>
                    </div>

                    <div
                        className="CTA-text CTA"
                        id="third-text"
                        ref={(el) => (ctaElements.current[4] = el)}
                    >
                        <p>
                            Do you not feel <span>UNIQUE</span> enough?
                        </p>
                    </div>

                    <div
                        className="CTA-image CTA"
                        id="third-image"
                        ref={(el) => (ctaElements.current[5] = el)}
                    >
                        <img src={image3} alt="" />
                    </div>

                    <div
                        className="CTA-image CTA"
                        id="fourth-image"
                        ref={(el) => (ctaElements.current[6] = el)}
                    >
                        <img src={image4} alt="" />
                    </div>

                    <div
                        className="CTA-text CTA"
                        id="fourth-text"
                        ref={(el) => (ctaElements.current[7] = el)}
                    >
                        <p>
                            Maybe you just can't <span>STAND OUT?</span>{' '}
                        </p>
                    </div>
                </div>
                <div className="message-box left-box">
                    <div className="message">
                        <a className="contact">
                            Explain your problems here
                            <FontAwesomeIcon icon={faArrowRight} className='iconAr'/>
                        </a>
                    </div>
                </div>
            </section>
            <GrowthSection cardText={cardText} />
            <FinalMessageSection />
        </>
    );
}
