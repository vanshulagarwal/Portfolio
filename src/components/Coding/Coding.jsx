import './Coding.scss';
// import { motion } from 'framer-motion';
import Codeforces from "../../assets/codeforces.png";
import Leetcode from "../../assets/leetcode.png";
import Github from "../../assets/github.png";
import Codechef from "../../assets/codechef.png";
import { codingProfilesData } from '../../constants';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useRef } from 'react';

const Coding = ({ addBtnRef }) => {
    const btnRefs = useRef([]);

    useEffect(() => {
        btnRefs.current.forEach((btnRef) => {
            if (btnRef) {
                addBtnRef(btnRef);
            }
        });
    }, [addBtnRef]);

    return (
        <div className="coding" id='coding'>
            <div className="container">
                <h1 className="section-title-01">Coding</h1>
                <h2 className="section-title-02">Coding</h2>
                <div className="content">
                    <div className="cards-container">
                        <div class="card">
                            <div class="iconContainer">
                                <div className="imgContainer codeforces">
                                    <img src={Codeforces} alt="" />
                                </div>
                                <div className="bottomCorner"></div>
                            </div>
                            <div className="cardHeader">
                                <span className='platformName'>CodeForces</span>
                                <span className='username'>@vanshulagarwal</span>
                            </div>
                            <div class="content">
                                {codingProfilesData.codeforces.map((data, index) => (
                                    <div className="eachDetail" key={index}>
                                        <img src={data.image} alt="" />
                                        <div className="detailcontent">
                                            <span className='heading'>{data.heading}</span>
                                            <span className='data'>{data.data}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='profileButton'>
                                <a href={"https://codeforces.com/profile/vanshulagarwal"} target='_blank' ref={(el) => (btnRefs.current[0] = el)}>
                                    <div><FaExternalLinkAlt fontSize={12} />Visit Profile</div>
                                </a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="iconContainer">
                                <div className="imgContainer leetcode">
                                    <img src={Leetcode} alt="" />
                                </div>
                                <div className="bottomCorner"></div>
                            </div>
                            <div className="cardHeader">
                                <span className='platformName'>Leetcode</span>
                                <span className='username'>@vanshulagarwal2004</span>
                            </div>
                            <div class="content">
                                {codingProfilesData.leetcode.map((data, index) => (
                                    <div className="eachDetail" key={index}>
                                        <img src={data.image} alt="" />
                                        <div className="detailcontent">
                                            <span className='heading'>{data.heading}</span>
                                            <span className='data'>{data.data}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='profileButton'>
                                <a href={"https://leetcode.com/u/vanshulagarwal2004/"} target='_blank' ref={(el) => (btnRefs.current[1] = el)}>
                                    <div><FaExternalLinkAlt fontSize={12} />Visit Profile</div>
                                </a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="iconContainer">
                                <div className="imgContainer github">
                                    <img src={Github} alt="" />
                                </div>
                                <div className="bottomCorner"></div>
                            </div>
                            <div className="cardHeader">
                                <span className='platformName'>GitHub</span>
                                <span className='username'>@vanshulagarwal</span>
                            </div>
                            <div class="content">
                                {codingProfilesData.github.map((data, index) => (
                                    <div className="eachDetail" key={index}>
                                        <img src={data.image} alt="" />
                                        <div className="detailcontent">
                                            <span className='heading'>{data.heading}</span>
                                            <span className='data'>{data.data}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='profileButton'>
                                <a href={"https://github.com/vanshulagarwal"} target='_blank' ref={(el) => (btnRefs.current[2] = el)}>
                                    <div><FaExternalLinkAlt fontSize={12} />Visit Profile</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="aboutList">
                        <div class="cards-container">
                            <div class="card">
                                <div class="iconContainer"><BsStack className='icon' /></div>
                                <div class="content">
                                    <h2>Full Stack Developer</h2>
                                    <p>Masterfully bridging elegant front-end interfaces with robust back-end systems for comprehensive solutions. Dedicated to driving innovation and delivering impactful experiences across the entire development stack.</p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="iconContainer"><IoSettings className='icon' /></div>
                                <div class="content">
                                    <h2>DSA Enthusiast</h2>
                                    <p>Solving complex problems with precision and efficiency through data structures and algorithms. Dedicated to optimizing solutions and tackling challenges across competitive programming platforms with unwavering focus. </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="iconContainer"><IoColorPalette className='icon' /></div>
                                <div class="content">
                                    <h2>Freelancer</h2>
                                    <p>Delivering tailor-made solutions with a client-first approach, blending creativity with technical expertise. Passionate about crafting exceptional projects that leave a lasting impact while ensuring seamless collaboration and satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default Coding;