import '@pages/aboutPage/aboutPage.css'

function AboutPage({ setCursorVariant }) {
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className='about-container'>
        <div className="title-container">
            <h1 
              className="title"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              About
            </h1>
            <h1 
              className="title secondary"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Me
            </h1>
        </div>
        <div className="description-container">
            <p 
              className="description"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
                Franco Du Plessis — Software developer with a strong focus on backend systems, deployment automation,
                and full-stack development. Proficient in building modular, scalable applications with Odoo (Python, XML, JavaScript, SCSS),
                and experienced in Linux environments and performance debugging via the terminal. I enjoy working across
                the stack, exploring new tools, and building efficient, maintainable solutions.
            </p>
        </div>
    </div>
  )
}

export default AboutPage
