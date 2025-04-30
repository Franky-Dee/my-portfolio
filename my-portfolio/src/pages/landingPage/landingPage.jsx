import MovingWordBorder from '@components/movingWordBorder/movingWordBorder.jsx'
import TitleBlock from '@components/titleBlock/titleBlock.jsx'

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
    </div>
  )
}

export default LandingPage
