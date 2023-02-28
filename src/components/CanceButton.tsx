import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function CancelButton({
  buttonName = "Cancel",
  navigateBack = false,
}) {
  const navigate = useNavigate();

  const handleCancelButton = (event) => {
    event.preventDefault();
    if (navigateBack) {
      navigate(-1);
    }
  };

  return (
    <Button onClick={handleCancelButton}>{buttonName}</Button>
  );
}

export default CancelButton;
