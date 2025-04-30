import './movingWordBorder.css';

const words = [
  "Bash", "PostgreSQL", "Franky", "Python", "404",
  "Git", "Linux", "JavaScript", "CODE", "SQL",
  "GitHub", "NeoVim", "XML", "React", "<Error>",
  "Lua", "CSS", "Odoo", "HTML", "BitBucket",
  "SQLite", "AWS", "Markdown"
];

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
          words.map((word, i) => (
            <span
              className={`words-${position}`}
              key={`${j}-${i}`}
              style={{
                fontSize: "64px",
                fontFamily: fonts[i % fonts.length],
              }}
            >
              {word}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default MovingWordBorder;
