import { useEffect, useRef } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import './Footer.scss';

const Footer = ({addBtnRef}) => {
    const btnRefs = useRef([]);

    useEffect(() => {
        btnRefs.current.forEach((btnRef) => {
            if (btnRef) {
                addBtnRef(btnRef);
            }
        });
    }, [addBtnRef]);

    return (
        <div className="footer">
            <div className="left">&copy;2024 Vanshul</div>
            <div className="right">
                <a href="https://www.linkedin.com/in/vanshul-agarwal/" target='_blank'
                    ref={(el) => (btnRefs.current.push(el))}><FaLinkedinIn /></a>
                <a href="https://github.com/vanshulagarwal" target='_blank'
                    ref={(el) => (btnRefs.current.push(el))}><FaGithub /></a>
                <a href="https://leetcode.com/u/vanshulagarwal2004/" target='_blank'
                    ref={(el) => (btnRefs.current.push(el))}><SiLeetcode /></a>
                <a href="https://codeforces.com/profile/vanshulagarwal" target='_blank'
                    ref={(el) => (btnRefs.current.push(el))}><SiCodeforces /></a>
                <a href="https://www.twitter.com/vanshulagarwal" target='_blank'
                    ref={(el) => (btnRefs.current.push(el))}><FaXTwitter /></a>
                <a href="https://www.instagram.com/im_v_agarwal/" target='_blank'
                    ref={(el) => (btnRefs.current.push(el))}><FaInstagram /></a>
            </div>
        </div>
    )
}

export default Footer;