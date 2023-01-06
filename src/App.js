import './App.css';
import { useState } from 'react';


function App({}) {

  const [recipeName, setRecipeName] = useState ('')
  const [showRecipeInput, setShowRecipeInput] = useState('visible')
  const [isShown, setIsShown] = useState(true);

  const handleRecipeNameChange = (event) => {
    setRecipeName(event.target.value)
  };

  const submit = (e) => {
    e.preventDefault();
    setShowRecipeInput('hidden')
    setIsShown(false)
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
        <div>
          <button> {isShown ? 'Crear Nueva Receta' : 'Editar Nueva Receta'}</button>
        </div>
      </form>

      <RecipeHeader currentRecipeName={recipeName}/>
      
    </div>
  );
}

export default App;
