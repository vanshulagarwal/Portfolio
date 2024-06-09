import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = ({ btnRefs, isUpdated }) => {
    const cursordivref = useRef();
    const cursordivOuterref = useRef();
    const [isHovering, setIsHovering] = useState(false);
    const [btnStyles, setBtnStyles] = useState({});


    const handleMouseMove = (e) => {
        // let btnRect = btnRef.current.getBoundingClientRect();
        if (cursordivref.current && cursordivOuterref.current) {
            cursordivref.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
            // cursordivOuterref.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
            if (isHovering) {
                cursordivOuterref.current.style.transform = `translate3d(calc(${btnStyles.left + btnStyles.width / 2}px - 50%), calc(${btnStyles.top + btnStyles.height / 2}px - 50%), 0)`;
            }
            else {
                cursordivOuterref.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
            }
        }
    };

    const handleMouseEnter = (btnRef) => {
        return () => {
            if (cursordivref.current) {
                const btnRect = btnRef.getBoundingClientRect();
                const computedStyle = getComputedStyle(btnRef);
                setBtnStyles(btnRect);
                setIsHovering(true);
                cursordivOuterref.current.style.width = `${btnRect.width + 10}px`;
                cursordivOuterref.current.style.height = `${btnRect.height + 10}px`;
                // cursordivOuterref.current.style.borderRadius = computedStyle.borderRadius;
                cursordivOuterref.current.style.borderRadius = `calc(5px + ${computedStyle.borderRadius}`;
            }
        };
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        cursordivOuterref.current.style.width = '40px';
        cursordivOuterref.current.style.height = '40px';
        cursordivOuterref.current.style.borderRadius = '50%';
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        btnRefs.current.forEach((btnRef) => {
            if (btnRef) {
                btnRef.addEventListener('mouseenter', handleMouseEnter(btnRef));
                btnRef.addEventListener('mouseleave', handleMouseLeave);
            }
        });
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);

            btnRefs.current.forEach((btnRef) => {
                if (btnRef) {
                    btnRef.removeEventListener('mouseenter', handleMouseEnter(btnRef));
                    btnRef.removeEventListener('mouseleave', handleMouseLeave);
                }
            });
        };
    }, [handleMouseEnter, handleMouseLeave, isUpdated]);



    // return () => {
    //   document.removeEventListener('mousemove', handleMouseMove);

    //   btnRefs.current.forEach((btnRef) => {
    //     if (btnRef) {
    //       btnRef.removeEventListener('mouseenter', handleMouseEnter(btnRef));
    //       btnRef.removeEventListener('mouseleave', handleMouseLeave);
    //     }
    //   });
    // };




    // const cursordivref = useRef();
    // const cursordivOuterref = useRef();
    // const btnRef = useRef();

    // const handleMouseMove = (e) => {
    //     let btnRect = btnRef.current.getBoundingClientRect();
    //     if (cursordivOuterref.current) {
    //         cursordivref.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    //         if (e.clientX >= btnRect.left && e.clientX <= btnRect.left + btnRect.width
    //             && e.clientY >= btnRect.top && e.clientY <= btnRect.top + btnRect.height) {
    //             cursordivOuterref.current.style.transform = `translate3d(calc(${btnRect.left + btnRect.width / 2}px - 50%), calc(${btnRect.top + btnRect.height / 2}px - 50%), 0)`;
    //             // cursordivOuterref.current.style.borderRadius = btnRef.current.style.borderRadius;
    //         }
    //         else {
    //             cursordivOuterref.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    //         }
    //     }
    // };

    // const handleMouseEnter = () => {
    //     if (btnRef.current) {
    //         let btnRect = btnRef.current.getBoundingClientRect();
    //         const computedStyle = getComputedStyle(btnRef.current);
    //         // console.log(btnRef.current.style)
    //         // console.log(btnRect.top, btnRect.left, btnRect.width, btnRect.height)
    //         if (cursordivOuterref.current) {
    //             cursordivOuterref.current.style.width = `${btnRect.width + 10}px`;
    //             cursordivOuterref.current.style.height = `${btnRect.height + 10}px`;
    //             cursordivOuterref.current.style.borderRadius = computedStyle.borderRadius;
    //             // cursordivOuterref.current.style.left = `${btnRect.left}px`;
    //             // cursordivOuterref.current.style.top = `${btnRect.top}px`;
    //         }
    //     }
    // };

    // const handleMouseLeave = () => {
    //     cursordivOuterref.current.style.width = '40px';
    //     cursordivOuterref.current.style.height = '40px';
    //     cursordivOuterref.current.style.borderRadius = '50%';
    // };

    // useEffect(() => {
    //     document.addEventListener('mousemove', handleMouseMove);
    //     const btnElement = btnRef.current;
    //     btnElement.addEventListener('mouseenter', handleMouseEnter);
    //     btnElement.addEventListener('mouseleave', handleMouseLeave);

    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //         btnElement.removeEventListener('mouseenter', handleMouseEnter);
    //         btnElement.removeEventListener('mouseleave', handleMouseLeave);
    //     };
    // }, []);




    return (
        <>
            <motion.div className="cursordiv" ref={cursordivref}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            ></motion.div>
            <motion.div className="cursordivOuter" ref={cursordivOuterref}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            ></motion.div>
        </>
    )
}

export default Cursor;