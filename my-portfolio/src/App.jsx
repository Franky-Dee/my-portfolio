import LandingPage from '@pages/landingPage/landingPage.jsx'
import AboutPage from '@pages/aboutPage/aboutPage.jsx'

import "./App.css"

import { useState, useEffect } from "react"
import { motion } from "motion/react"


function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, id: false });
    const [cursorVariant, setCursorVariant] = useState("default");
    const [clickPosition, setClickPosition] = useState(null);

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

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
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 600,
            width: 600,
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
            backgroundColor: "white",
            mixBlendMode: "difference",
        }
    }

    return (
        <>
            <LandingPage setCursorVariant={setCursorVariant}/>
            <AboutPage setCursorVariant={setCursorVariant}/>
            <motion.div 
                className="cursor"
                variants={variants}
                animate={cursorVariant}
                position="fixed"
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
