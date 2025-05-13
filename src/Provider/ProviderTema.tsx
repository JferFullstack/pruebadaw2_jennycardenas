import React, { useContext, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { contextTema } from '../Contexto/ContextTema'
import { Tema } from '../Modelos/Tema'

//children (renderizamos los componente /consumidores)
//dar funcionalidad a la definicion del contexto
//exportar contexto

export default function ProviderTema({children}:PlantillaReact) {

 const [temas, setTemas]= useState<Tema[]>([
    { id: 1, titulo: 'Tema 1', interesante: false },
    { id: 2, titulo: 'Tema 2', interesante: false },
    { id: 3, titulo: 'Tema 3', interesante: false },
    { id: 4, titulo: 'Tema 4', interesante: false },
    { id: 5, titulo: 'Tema 5', interesante: false },
    { id: 6, titulo: 'Tema 6', interesante: false },
    { id: 7, titulo: 'Tema 7', interesante: false },
    { id: 8, titulo: 'Tema 8', interesante: false },
    { id: 9, titulo: 'Tema 9', interesante: false },
    { id: 10, titulo: 'Tema 10', interesante: false },
    { id: 11, titulo: 'Tema 11', interesante: false },
    { id: 12, titulo: 'Tema 12', interesante: false },
    { id: 13, titulo: 'Tema 13', interesante: false },
    { id: 14, titulo: 'Tema 14', interesante: false },
    { id: 15, titulo: 'Tema 15', interesante: false },
    { id: 16, titulo: 'Tema 16', interesante: false },
    { id: 17, titulo: 'Tema 17', interesante: false },
    { id: 18, titulo: 'Tema 18', interesante: false },
    { id: 19, titulo: 'Tema 19', interesante: false },
    { id: 20, titulo: 'Tema 20', interesante: false }
 ]);

 function agregarTema(tema: Tema) {
    const actualizado = temas.map(t =>
      t.id === tema.id ? { ...t, interesante: !t.interesante } : t
    );
    setTemas(actualizado);
  }

  return (
    <contextTema.Provider value={{ temas, setTemas, agregarTema }}>
      {children}
    </contextTema.Provider>
  );
}


export function useContextTema() {
  return useContext(contextTema);
}