import LandingPage from '@pages/landingPage/landingPage.jsx'
import AboutPage from '@pages/aboutPage/aboutPage.jsx'

import "./App.css"

import { useState, useEffect } from "react"
import { motion } from "motion/react"


function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");
    const [clickPosition, setClickPosition] = useState(null);

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

        const handleClick = e => {
            const { innerWidth, innerHeight } = window;
            const x = e.clientX;
            const y = e.clientY;

            if (x > 100 && x < innerWidth - 100 && y > 100 && y < innerHeight - 100) {
                setClickPosition({ x, y });
            } else {
                setClickPosition(null);
            }
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
            height: 400,
            width: 400,
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
            backgroundColor: "white",
            mixBlendMode: "difference",
        }
    }

    return (
        <>
            <LandingPage setCursorVariant={setCursorVariant}/>
            <AboutPage/>
            <motion.div 
                className="cursor"
                variants={variants}
                animate={cursorVariant}
                position="fixed"
            />
            {clickPosition && (
                <span 
                    style={{
                        position: 'fixed',
                        left: clickPosition.x,
                        top: clickPosition.y,
                        fontColor: 'black',
                        background: 'none',
                        fontSize: '30px',
                        pointerEvents: 'none',
                        fontFamily: "'DM Serif Text', serif",
                    }}
                >
                    "click"
                </span>
            )}
        </>
    )
}


export default App
