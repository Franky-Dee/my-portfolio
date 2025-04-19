import './movingWordBorder.css';

const words = ["React", "Creativity", "Border", "Scroll", "Design", "Code", "Innovate"];
const fonts = ["'Courier New', monospace", "'Times New Roman', serif", "'Arial', sans-serif", "'Comic Sans MS', cursive"];

function MovingWordBorder() {
  return (
    <>
      <BorderSide position="top" />
      <BorderSide position="bottom" />
      <BorderSide position="left" vertical />
      <BorderSide position="right" vertical />
    </>
  );
}

function BorderSide({ position, vertical = false }) {
  return (
    <div className={`moving-text-border ${position}-border`}>
      <div className="moving-text">
        {Array.from({ length: 50 }, (_, i) => (
          <span
            key={i}
            style={{ fontFamily: fonts[i % fonts.length], margin: "0 10px" }}
          >
            {words[i % words.length]}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovingWordBorder;
