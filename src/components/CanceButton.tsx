import { useNavigate } from "react-router-dom";

function CancelButton({ navigateBack = false }) {
  const navigate = useNavigate();

  const handleCancelButton = (event) => {
    event.preventDefault();
    if (navigateBack) {
      navigate(-1);
    }
  };
  
  return <button onClick={handleCancelButton}>Cancel</button>;
}

export default CancelButton;
