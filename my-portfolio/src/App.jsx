import LandingPage from './pages/landingPage/landingPage.jsx'
import "./App.css"

import { useState, useEffect } from "react"
import { motion } from "motion/react"

function App() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

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
            <motion.div 
                className="cursor"
                variants={variants}
                animate={cursorVariant}
                position="fixed"
            />
        </>
    )
}

export default App
