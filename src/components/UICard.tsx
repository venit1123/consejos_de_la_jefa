import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";

function UiCard({
  title,
  subtitle,
  description,
  handleLeftCardButton,
  leftClickParams,
  handleRightCardButton,
  rightClickParams,
  handleCloseCardButton,
  closeCardClickParams,
}) {
  const handleLeftCardClick = (event) => {
    event.preventDefault();
    handleLeftCardButton(leftClickParams);
  };

  const handleRightCardClick = (event) => {
    event.preventDefault();
    handleRightCardButton(rightClickParams);
  };

  const handleCloseCardClick = (event) => {
    event.preventDefault();
    handleCloseCardButton(closeCardClickParams);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <CloseButton
        onClick={handleCloseCardClick}
      />
      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <em>{subtitle}</em>
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Link onClick={handleLeftCardClick}>
          Ver Receta
        </Card.Link>
        <Card.Link onClick={handleRightCardClick}>
          Modificar Receta
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default UiCard;
