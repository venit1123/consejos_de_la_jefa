import './App.css';
import { useState, useRef } from 'react';


function App({}) {

  const [recipeName, setRecipeName] = useState ('')
  const [showRecipeInput, setShowRecipeInput] = useState('visible')
  const [buttonName, setButtonName] = useState('Crear Nueva Receta')
  
  const handleRecipeNameChange = (event) => {
    setRecipeName(event.target.value)
  };

  const submit = (e) => {
    e.preventDefault();
    // alert(`${recipeName}`)
    setShowRecipeInput('hidden')
    setButtonName('Editar Nombre de Receta')
  };

  function RecipeHeader({currentRecipeName}) {
    return(
      <h1>Receta para hacer {currentRecipeName} </h1>
    );
  }
  
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          style={{visibility: showRecipeInput}}
          value={recipeName}
          type="text"
          placeholder="Nombre de el Platillo" 
          onChange={handleRecipeNameChange}
        />
        <br></br>
        <button>{buttonName}</button>

      </form>

      <RecipeHeader currentRecipeName={recipeName}/>
      
    </div>
  );
}

export default App;
