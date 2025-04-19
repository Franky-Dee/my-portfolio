import './movingWordBorder.css';

const words = ["Franky", "Franky", "Franky", "Franky", "Franky", "Franky", "Franky"];
const fonts = [
  "'Courier New', monospace",
  "'Times New Roman', serif",
  "'Arial', sans-serif",
  "'Comic Sans MS', cursive"
];

function MovingWordBorder() {
  return (
    <>
      <BorderSide position="top" />
      <BorderSide position="bottom" />
      <BorderSide position="left" />
      <BorderSide position="right" />
    </>
  );
}

function BorderSide({ position }) {
  return (
    <div className={`moving-text-border ${position}-border`}>
      <div className="moving-text">
        {[...Array(2)].flatMap((_, j) =>
          Array.from({ length: 50 }, (_, i) => (
            <span
              key={`${j}-${i}`}
              style={{
                fontSize: "50px",
                fontWeight: "bold",
                fontFamily: fonts[i % fonts.length],
                margin: "100px 100px",
                display: "inline-block",
                transform:
                  position === "left"
                    ? "rotate(90deg)"
                    : position === "right"
                    ? "rotate(-90deg)"
                    : "none"
              }}
            >
              {words[i % words.length]}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default MovingWordBorder;
