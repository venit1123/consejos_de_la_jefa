import './App.css';
import { useState, Fragment } from 'react';


function App({}) {

  const [recipeTitleProps, resetRecipeTitle] = useInput('')
  const [authorNameProps, resetAuthorName] = useInput('')
  const [showRecipeInput, setShowRecipeInput] = useState('visible')
  const [isShown, setIsShown] = useState(true);


  const submit = (e) => {
    e.preventDefault();
    alert(`${recipeTitleProps.value} ${authorNameProps.value}`)
    setShowRecipeInput('hidden');
    setIsShown(false);
    // resetRecipeTitle()
    // resetAuthorName()
  };

  function RecipeHeader() {
    return(
      <Fragment>
        <h1>Receta para hacer {recipeTitleProps.value} </h1>
        <h3>Autor: {authorNameProps.value} </h3>
      </Fragment>
    );
  }
  
  function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    return [
      {
        value,
        onChange: (event) => { setValue(event.target.value) }
      },
      () => setValue(initialValue)
    ]
  };
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          {...recipeTitleProps}
          style={{visibility: showRecipeInput}}
          type="text"
          placeholder="Nombre de el Platillo" 
        />
        <input
          {...authorNameProps}
          style={{visibility: showRecipeInput}}
          type="text"
          placeholder="autor" 
        />
        <br></br>
        <div>
          <button> {isShown ? 'Crear Nueva Receta' : 'Editar Nueva Receta'}</button>
        </div>
      </form>

      <RecipeHeader/>
      
    </div>
  );
}

export default App;
