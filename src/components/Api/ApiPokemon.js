// import React, { useEffect, useState, Component } from "react";
// import api from "../Service/Pokemon";

// export default function AppPokemon() {
//   const [pokemon, setPokemon] = useState();

//   useEffect(() => {
//     api
//       .get("/pokemon")
//       .then((response) => setUser(response.data))
//       .catch((err) => {
//         console.error("ops! ocorreu um erro" + err);
//       });
//   }, []);

//   return (
//     <div>
//       <p>Pokemon: {pokemon.data}</p>
//       <p>Biografia: {pokemon?.bio}</p>
//     </div>
//   );
// }
