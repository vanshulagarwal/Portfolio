import { useState, useRef, useEffect } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPaperPlane, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { LuPartyPopper } from "react-icons/lu";

const Contact = ({ addBtnRef }) => {
    const btnRefs = useRef([]);

    useEffect(() => {
        btnRefs.current.forEach((btnRef) => {
            if (btnRef) {
                addBtnRef(btnRef);
            }
        });
    }, [addBtnRef]);

    const [mailDetails, setMailDetails] = useState({
        user_name: '',
        user_email: '',
        user_message: '',
    });

    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errmsg, setErrmsg] = useState("");

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setMailDetails(prev => ({ ...prev, [name]: value }));
        if (errmsg) {
            setErrmsg("");
        }
        // console.log(mailDetails);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (!mailDetails.user_email || !mailDetails.user_name || !mailDetails.user_message) {
            return setErrmsg("Please fill all the fields");
            // return alert("Please fill all the fields");
        }
        if (!mailDetails.user_email.includes('@') || !mailDetails.user_email.includes('.')) {
            return setErrmsg("Please enter a valid email");
            // return alert("Please enter a valid email");
        }

        setIsLoading(true);

        emailjs
            .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
                user_name: mailDetails.user_name,
                user_email: mailDetails.user_email,
                user_message: mailDetails.user_message,
                to_name: 'Vanshul'
            }, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsLoading(false);
                    setSuccess(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsLoading(false);
                    setError(true);
                },
            );
    };

    return (
        <div className="contact" id='contact'>
            <div className="container">
                <h1 className="section-title-01">Contact Me</h1>
                <h2 className="section-title-02">Contact Me</h2>
                <div className="content">
                    <div className="content-left">
                        <div className='contact-list'>
                            <div className='contact-list-items'>
                                <h3><FaPhone className='contactIcon' />Phone</h3>
                                <span><a href="tel:+919305214335" className='link-text'>
                                    <span className='link1'>+91 9305 214 335</span>
                                    <span className='link2'>+91 9305 214 335</span>
                                </a></span>
                            </div>
                            <div className='contact-list-items'>
                                <h3><FaEnvelope className='contactIcon' />Mail</h3>
                                <span><a href="mailto:vanshulagarwal2004@gmail.com" className='link-text'>
                                    <span className='link1'>vanshulagarwal2004@gmail.com</span>
                                    <span className='link2'>vanshulagarwal2004@gmail.com</span>
                                </a></span>
                            </div>
                            <div className='contact-list-items'>
                                <h3><FaWhatsapp className='contactIcon' />Whatsapp</h3>
                                <span><a href="https://wa.me/+919305214335" className='link-text'>
                                    <span className='link1'>Ping Me</span>
                                    <span className='link2'>Ping Me</span>
                                </a></span>
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        <p>I'm always open to discussing product <br /><span>design work or partnerships.</span></p>
                        <div className="contact-form">
                            <div className="first-row">
                                <label htmlFor="user_name">Name</label>
                                <input type="text" id='user_name' name='user_name' onChange={handleFormChange} placeholder='Ross' />
                            </div>
                            <div className="second-row">
                                <label htmlFor="user_email">Email</label>
                                <input type="email" id='user_email' name='user_email' onChange={handleFormChange} placeholder='example123@gmail.com' />
                            </div>
                            <div className="third-row">
                                <label htmlFor="user_message">Message</label>
                                <textarea rows="7" id='user_message' name='user_message' onChange={handleFormChange} placeholder='Description of the work or project'></textarea>
                            </div>
                            {errmsg != "" &&
                                <motion.div className='errmsg'
                                    initial={{ opacity: 0, scale: 0.75 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >{errmsg}</motion.div>
                            }

                            <button className='btn' onClick={sendEmail} ref={(el) => (btnRefs.current[0] = el)}>
                                <span className='btnAnimation'>
                                    <span></span>
                                </span>
                                <span className='btnText'>
                                    {isLoading
                                        ? <><FaPaperPlane />Sending</>
                                        : error
                                            ? "Something went wrong"
                                            : success
                                                ? <><LuPartyPopper />Sent Successfully</>
                                                : <><FaPaperPlane />Send Message</>
                                    }
                                </span>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;