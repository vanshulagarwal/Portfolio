import './Skills.scss';
import { skillsData } from '../../constants';
import { animate, motion } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

const Skills = ({ addBtnRef }) => {
    const btnRefs = useRef([]);

    useEffect(() => {
        btnRefs.current.forEach((btnRef) => {
            if (btnRef) {
                addBtnRef(btnRef);
            }
        });
    }, [addBtnRef]);


    return (
        <div className="skills" id='skills'>

            <h1 className="section-title-01">Skills</h1>
            <h2 className="section-title-02">Skills</h2>
            <div className='allSkills'>
                {skillsData.map((skill, index) => (
                    <motion.div className='eachSkill' key={index}
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.05 * (Math.random() * 10)
                            }
                        }}
                        viewport={{ once: true }}
                        ref={(el) => (btnRefs.current[index] = el)}
                    >
                        <img src={skill.img} alt={skill.name} />
                        <span>{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills