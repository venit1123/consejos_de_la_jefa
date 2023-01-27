function Card({ title, subtitle, description }) {
  return (
    <div className="card h-100" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          <em>{subtitle}</em>
        </h6>
        <p className="card-text">{description}</p>
        <a href="#" className="card-link">
          Ver Receta
        </a>
        <a href="#" className="card-link">
          Modificar Receta
        </a>
      </div>
    </div>
  );
}

export default Card;
