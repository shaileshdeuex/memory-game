function Card(props) {
  let { id, flip, value, changeCardDeck, setCompareArr } = props;

  const handleClick = (id) => {
    setCompareArr({ id, value, flip: true });
    changeCardDeck(id);
  };

  return (
    <div className="flip-card" onClick={() => handleClick(id - 1)} id={id}>
      <div className={`flip-card-inner  ${flip ? "flip" : "no-flip"}`}>
        <div className="flip-card-front">
          <img
            src="https://image.shutterstock.com/image-illustration/try-your-luck-text-on-600w-1865733352.jpg"
            alt=""
          />
        </div>
        <div className="flip-card-back">
          <h1>{value}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
