//productos
//setprudctos
//agregarproductos

import { createContext } from "react";
import { Tema } from "../Modelos/Tema";

interface ContextTemaType {
  temas: Tema[];
  setTemas: (temas: Tema[]) => void;
  agregarTema: (tema: Tema) => void;
}

export const contextTema = createContext<ContextTemaType>({
  temas: [],
  setTemas: () => {},
  agregarTema: () => {}
});