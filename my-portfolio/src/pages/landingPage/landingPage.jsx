import MovingWordBorder from '@components/movingWordBorder/movingWordBorder.jsx'
import TitleBlock from '@components/titleBlock/titleBlock.jsx'
import TypingText from '@components/typingText/typingText.jsx'
import '@pages/landingPage/landingPage.css'

function LandingPage({ setCursorVariant }) {
  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")

  return (
    <div className="main-container">
        <MovingWordBorder/>
        <TitleBlock 
            onMouseEnter={textEnter}
            onMouseLeave={textLeave} 
            className="title-block"
        />
        <TypingText text="Hello World!"/>
    </div>
  )
}

export default LandingPage
