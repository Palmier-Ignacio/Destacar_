function Opinion(props) {
    let starsText = '';
    for (let i = 0; i < props.stars; i++) {
        starsText += '⭐'; //Cambiar por imagen de estrella
    }
  return (
    <div className="opinion">
        <h4 className="opinion-author">
            {props.author}
        </h4>
        <p className="opinion-text">
            {props.opinion}
        </p>
        <p className="stars">
            {starsText}
        </p>
    </div>
  );
}
export default Opinion;