// import React, { useEffect, useState } from "react";
// import apiPokemon from "../Service/pokemon";

// export default function AppPokemon() {
//   const [pokemon, setPokemon] = useState();

//   useEffect(() => {
//     apiPokemon
//       .get("/pokemon")
//       .then((response) => setUser(response.data))
//       .catch((err) => {
//         console.error("ops! ocorreu um erro" + err);
//       });
//   }, []);

//   return (
//     <div>
//       <p>Pokemon: {pokemon.data}</p>
//       <p>Biografia: {pokemon.bio}</p>
//     </div>
//   );
// }
