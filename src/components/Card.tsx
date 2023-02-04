import { Link } from "react-router-dom";

function Card({
  title,
  subtitle,
  description,
  handleLeftCardButton,
  recipeId,
  toPath,
}) {
  const handleLeftClick = (event) => {
    event.preventDefault();
    handleLeftCardButton(recipeId);
  };

  return (
    <div className="card h-100" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          <em>{subtitle}</em>
        </h6>
        <p className="card-text">{description}</p>
        <Link
          className="card-link"
          onClick={handleLeftClick}
          to={toPath}
        >
          Ver Receta
        </Link>
        {/* <button onClick={handleLeftClick} className="card-link">
          Ver Receta
        </button> */}
        <a href="#" className="card-link">
          Modificar Receta
        </a>
      </div>
    </div>
  );
}

export default Card;
