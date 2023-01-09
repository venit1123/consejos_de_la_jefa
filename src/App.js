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


// // Example: Fetching Data using Hooks
// import './App.css';
// import { useState, useEffect, Fragment} from 'react';

// function RecipeName({recipeName, instructions, foodImage}){
//   return(
//     <Fragment>
//       <h2>Recipe Name: {recipeName}</h2>
//       <p>{instructions}</p>
//       <img src={foodImage} height={150} alt={recipeName}></img>
//     </Fragment>
//   );
// }

// function App({}) {
//   const [data, setData] =  useState(null)
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(false)

//   useEffect( () => {
//     setLoading(true)
//     fetch(
//       'https://api.spoonacular.com/recipes/random?apiKey=237e5514eed74c1a8216d760546f9f15'
//     )
//     .then((response) => response.json())
//     .then((data) => setData(data))
//     .then(() => setLoading(false))
//     .catch((data) => setError(data));
//   }, []);

//   if(loading) return <h1>Loading....</h1>
//   if(error) return <pre>{JSON.stringify(error)}</pre>
//   if(!data) return null;

//   return (
//       <RecipeName 
//         recipeName={data.recipes[0].title} 
//         instructions={data.recipes[0].instructions}
//         foodImage={data.recipes[0].image}/>
//     );
// }


// export default App;


// // Example: Fetching Data with GraphQL
// import './App.css';
// import { useState, useEffect, Fragment} from 'react';

// const query = `query {
//   allLifts{
//     name,
//     elevationGain,
//     status
//   }
// }`;


// function Lift({name, elevationGain, status}){
//   return(
//     <Fragment>
//       <h2>Name: {name}</h2>
//       <p>{elevationGain}, {status}</p>
//     </Fragment>
//   );
// }

// const opts = {
//   method: "POST",
//   headers: {"Content-Type": "application/json"},
//   body: JSON.stringify({query})
// }

// function App({}) {
//   const [data, setData] =  useState(null)
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(false)

//   useEffect( () => {
//     setLoading(true)
//     fetch(
//       'https://snowtooth.moonhighway.com/',
//       opts
//     )
//     .then((response) => response.json())
//     .then((data) => setData(data))
//     .then(() => setLoading(false))
//     .catch((data) => setError(data));
//   }, []);

//   if(loading) return <h1>Loading....</h1>
//   if(error) return <pre>{JSON.stringify(error)}</pre>
//   if(!data) return null;

//   return (
//       <Fragment>
//         {data.data.allLifts.map((lift) => (
//           <Lift name={lift.name} elevationGain={lift.elevationGain} status={lift.status}/>
//         ))}
//       </Fragment>
//     );
// }


// export default App;


// Example: Fetching Data with GraphQL
import './App.css';
import { useState, useEffect, Fragment} from 'react';

function App({}) {
  const dummy_data = [
    {"name": "Mexico City", "elevation": 10891},
    {"name": "Guadalajara", "elevation": 10067},
    {"name": "Monterrey", "elevation": 9735}
  ]

  function List({data, renderItem, renderEmpty}) {
     return !data.length ? (
        renderEmpty) : (
           <ul>{data.map((item) => (
              <li key={item.name}>
                {renderItem(item)}
              </li>
           ))}
           </ul>)
  }

  return (
      <List 
        data={dummy_data}
        renderEmpty={<p>This list is empty</p>}
        renderItem={item => 
          <Fragment>
            {item.name} - {item.elevation}
          </Fragment>}
        />
    );
}


export default App;
