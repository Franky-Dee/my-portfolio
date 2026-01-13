import LandingPage from '@pages/landingPage/landingPage.jsx'
import AboutPage from '@pages/aboutPage/aboutPage.jsx'

import "./App.css"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"


function App() {
    const aboutRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, id: false });
    const [cursorVariant, setCursorVariant] = useState("default");
    const [clickPosition, setClickPosition] = useState(null);
    const [currentSection, setCurrentSection] = useState("landing");

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            
            if (scrollPosition < windowHeight / 2) {
                setCurrentSection("landing");
            } else {
                setCurrentSection("about");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

    const handleClick = () => {
        const { innerWidth, innerHeight } = window;
        const padding = 100;

        const x = Math.floor(Math.random() * (innerWidth - padding * 2)) + padding;
        const y = Math.floor(Math.random() * (innerHeight - padding * 2)) + padding;

        setClickPosition({ x, y, id: Date.now() });
    }

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const isAboutPage = currentSection === "about";
    
    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: isAboutPage ? "white" : "black",
            mixBlendMode: "normal",
        },
        text: {
            height: isAboutPage ? 80 : 400,
            width: isAboutPage ? 80 : 400,
            x: isAboutPage ? mousePosition.x - 40 : mousePosition.x - 200,
            y: isAboutPage ? mousePosition.y - 40 : mousePosition.y - 200,
            backgroundColor: "white",
            mixBlendMode: "difference",
        }
    }

    return (
        <>
            <LandingPage setCursorVariant={setCursorVariant} aboutRef={aboutRef}/>
            <div ref={aboutRef}>
                <AboutPage setCursorVariant={setCursorVariant}/>
            </div>
            <motion.div 
                className="cursor"
                key={currentSection}
                variants={variants}
                animate={cursorVariant}
            />
            {clickPosition && (
                <motion.span 
                    key={clickPosition.id}
                    initial={{ y: 20, scale: 0.5, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                        duration: 0.3,
                    }}
                    style={{
                        position: 'absolute',
                        left: clickPosition.x,
                        top: clickPosition.y,
                        fontColor: 'black',
                        background: 'none',
                        fontSize: '30px',
                        pointerEvents: 'none',
                        fontFamily: "'Jersey 15', sans-serif",
                    }}
                >
                    "click"
                </motion.span>
            )}
        </>
    )
}


export default App
