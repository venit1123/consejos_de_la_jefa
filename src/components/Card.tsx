import { Link } from "react-router-dom";

function Card({
  title,
  subtitle,
  description,
  handleLeftCardButton,
  leftClickParams,
  handleRightCardButton,
  rightClickParams,
}) {
  const handleLeftCardClick = (event) => {
    event.preventDefault();
    handleLeftCardButton(leftClickParams);
  };

  const handleRightCardClick = (event) => {
    event.preventDefault();
    handleRightCardButton(rightClickParams);
  };

  return (
    <div className="card h-100" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          <em>{subtitle}</em>
        </h6>
        <p className="card-text">{description}</p>
        <a className="card-link" onClick={handleLeftCardClick}>
          Ver Receta
        </a>
        <a className="card-link" onClick={handleRightCardClick}>
          Modificar Receta
        </a>
      </div>
    </div>
  );
}

export default Card;
