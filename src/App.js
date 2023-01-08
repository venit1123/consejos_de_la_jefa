// import './App.css';
// import { useState, Fragment } from 'react';


// function App({}) {

//   const [recipeTitleProps, resetRecipeTitle] = useInput('')
//   const [authorNameProps, resetAuthorName] = useInput('')
//   const [showRecipeInput, setShowRecipeInput] = useState('visible')
//   const [isShown, setIsShown] = useState(true);


//   const submit = (e) => {
//     e.preventDefault();
//     alert(`${recipeTitleProps.value} ${authorNameProps.value}`)
//     setShowRecipeInput('hidden');
//     setIsShown(false);
//     // resetRecipeTitle()
//     // resetAuthorName()
//   };

//   function RecipeHeader() {
//     return(
//       <Fragment>
//         <h1>Receta para hacer {recipeTitleProps.value} </h1>
//         <h3>Autor: {authorNameProps.value} </h3>
//       </Fragment>
//     );
//   }
  
//   function useInput(initialValue) {
//     const [value, setValue] = useState(initialValue)
//     return [
//       {
//         value,
//         onChange: (event) => { setValue(event.target.value) }
//       },
//       () => setValue(initialValue)
//     ]
//   };
//   return (
//     <div className="App">
//       <form onSubmit={submit}>
//         <input
//           {...recipeTitleProps}
//           style={{visibility: showRecipeInput}}
//           type="text"
//           placeholder="Nombre de el Platillo" 
//         />
//         <input
//           {...authorNameProps}
//           style={{visibility: showRecipeInput}}
//           type="text"
//           placeholder="autor" 
//         />
//         <br></br>
//         <div>
//           <button> {isShown ? 'Crear Nueva Receta' : 'Editar Nueva Receta'}</button>
//         </div>
//       </form>

//       <RecipeHeader/>
      
//     </div>
//   );
// }

// export default App;


// Example: Fetching Data using Hooks
import './App.css';
import { useState, useEffect, Fragment} from 'react';

function RecipeName({recipeName, instructions, foodImage}){
  return(
    <Fragment>
      <h2>Recipe Name: {recipeName}</h2>
      <p>{instructions}</p>
      <img src={foodImage} height={150} alt={recipeName}></img>
    </Fragment>
  );
}

function App({}) {
  const [data, setData] =  useState(null)
  useEffect( () => {
    fetch(
      'https://api.spoonacular.com/recipes/random?apiKey=237e5514eed74c1a8216d760546f9f15'
    )
    .then((response) => response.json())
    .then((data) => setData(data))
  }, []);

  console.log('This is the data:', {data})
  if (data)
    return (
      <RecipeName 
        recipeName={data.recipes[0].title} 
        instructions={data.recipes[0].instructions}
        foodImage={data.recipes[0].image}/>
    );
  return(
      <h1>TESTING FETCHIN DATA WITH HOOKS</h1>
  );
}


export default App;
