const text = "THE CONCRETE STORY";

const InitialLoader = () => {
  return (
    <div className="swing-loader">
      <div className="swing-word">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`swing-letter ${
              index % 2 === 0 ? "swing-up" : "swing-down"
            }`}
          >
            {char === " " ? "\u00A0\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InitialLoader;
