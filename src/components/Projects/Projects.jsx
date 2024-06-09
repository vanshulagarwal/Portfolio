import './Projects.scss';
import { projectData } from '../../constants';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from "react-icons/fa6";
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';

const Projects = ({ addBtnRef }) => {
    const btnRefs = useRef([]);

    useEffect(() => {
        btnRefs.current.forEach((btnRef) => {
            if (btnRef) {
                addBtnRef(btnRef);
            }
        });
    }, [addBtnRef]);

    return (
        <div className="projects" id='projects'>

            <h1 className="section-title-01">Projects</h1>
            <h2 className="section-title-02">Projects</h2>
            <div className="content">
                {projectData.map((project, index) => (
                    <div className="eachProject" key={index}>
                        <div className="eachProjectImgs">
                            <Swiper
                                modules={[Pagination, Autoplay, EffectFade]}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{ clickable: true }}
                                // effect={'fade'}
                                style={{
                                    "--swiper-pagination-color": "black",
                                }}
                            >
                                {project.projectImg.map((imagesrc, index) =>
                                    <SwiperSlide key={index}><img src={imagesrc} alt="" /></SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                        <div className="eachProjectHeading">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >{project.projectName}</motion.h3>
                            <div className="techStack">
                                {project.techStack.map((item, index) => (
                                    <span key={index} className='eachStack'>
                                        <img src={item} alt="" />
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="eachProjectDetail">
                            <motion.div className='desc'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >{project.projectDesc}</motion.div>
                            <div className='projectLinks'>
                                <a href={project.projectRepo} target='_blank' ref={(el) => (btnRefs.current[index] = el)}>
                                    <div><FaGithub />View Code</div>
                                </a>
                                {project.projectUrl &&
                                    <a href={project.projectUrl} target='_blank' ref={(el) => (btnRefs.current[index + projectData.length] = el)}>
                                        <div><FaLink />Visit Website</div>
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;