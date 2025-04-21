import  {useState, useEffect} from "react";
import "./titleBlock.css";

const fonts = [
    "'DM Serif Text', serif",
    "'Imperial Script', cursive",
    "'Fascinate Inline', system-ui",
    "'Silkscreen', sans-serif",
    "'Creepster', system-ui",
    "'Notable', sans-serif",
    "'Libre Barcode 128 Text', system-ui",
    "'Danfo', serif",
];

function TitleBlock() {
  const [font, setFont] = useState(fonts[0])

  useEffect(() => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)]
    setFont(randomFont)
  })

  return (
    <>
        <div className="name" style={{fontFamily: font}}>
            FrankyDee
        </div>
    </>
  )
}

export default TitleBlock
