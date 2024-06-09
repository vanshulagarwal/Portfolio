import './Experience.scss';
import { Chrono } from 'react-chrono';
import { certificationsData, educationData } from '../../constants';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = ({ addBtnRef }) => {
    const btnRefs = useRef([]);

    useEffect(() => {
        btnRefs.current.forEach((btnRef) => {
            if (btnRef) {
                addBtnRef(btnRef);
            }
        });
    }, [addBtnRef]);

    const [activeChild, setActiveChild] = useState(1);

    const variants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    return (
        <div className="experience" id="experience">
            <h1 className="section-title-01">Education & Certification</h1>
            <h2 className="section-title-02">Education & Certification</h2>
            <div className="wrapper">
                <div className="buttons">
                    <button className={activeChild === 1 ? 'active' : ''} onClick={() => setActiveChild(1)}
                        ref={(el) => (btnRefs.current[0] = el)}>
                        Education
                    </button>
                    <button className={activeChild === 2 ? 'active' : ''} onClick={() => setActiveChild(2)}
                        ref={(el) => (btnRefs.current[1] = el)}>
                        Certifications
                    </button>
                </div>
                <div className="child-divs">
                    <AnimatePresence>
                        {activeChild === 1 && (
                            <motion.div
                                className="child-div"
                                key="child1"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={variants}
                                transition={{ duration: 0.5 }}
                            >
                                <Chrono items={educationData} mode="VERTICAL_ALTERNATING"
                                    cardWidth={200}
                                    cardHeight={100}
                                    disableToolbar={true}
                                    activeItemIndex={null}
                                    disableClickOnCircle={true}
                                    highlightCardsOnHover={true}
                                    // timelinePointShape={"square"}
                                    // enableBreakPoint
                                    responsiveBreakPoint={600}
                                    classNames={{
                                        card: 'my-card',
                                        // cardMedia: 'my-card-media',
                                        cardSubTitle: 'my-card-subtitle',
                                        cardText: 'my-card-text',
                                        cardTitle: 'my-card-title',
                                        controls: 'my-controls',
                                        title: 'my-title',
                                    }}
                                    theme={{
                                        primary: "#3b3834",
                                        secondary: "",
                                        cardBgColor: "rgb(225 225 219)",
                                        cardForeColor: "violet",
                                        titleColor: "#3b3834",
                                        titleColorActive: "",
                                        cardDetailsBackGround: "red"
                                    }}
                                />
                            </motion.div>
                        )}
                        {activeChild === 2 && (
                            <motion.div
                                className="child-div"
                                key="child2"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={variants}
                                transition={{ duration: 0.5 }}
                            >
                                <Chrono items={certificationsData} mode="VERTICAL_ALTERNATING"
                                    cardWidth={200}
                                    cardHeight={50}
                                    disableToolbar={true}
                                    activeItemIndex={null}
                                    disableClickOnCircle={true}
                                    highlightCardsOnHover={true}
                                    // timelinePointShape={"square"}
                                    // enableBreakPoint
                                    responsiveBreakPoint={600}
                                    classNames={{
                                        card: 'my-card',
                                        // cardMedia: 'my-card-media',
                                        cardSubTitle: 'my-card-subtitle',
                                        cardText: 'my-card-text',
                                        cardTitle: 'my-card-title',
                                        controls: 'my-controls',
                                        title: 'my-title',
                                    }}
                                    theme={{
                                        primary: "#3b3834",
                                        secondary: "",
                                        cardBgColor: "rgb(225 225 219)",
                                        cardForeColor: "violet",
                                        titleColor: "#3b3834",
                                        titleColorActive: "",
                                        cardDetailsBackGround: "red"
                                    }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Experience;