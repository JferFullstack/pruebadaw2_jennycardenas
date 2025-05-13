import Image from "next/image";
import styles from "./page.module.css";
import { useContextTema } from "@/Provider/ProviderTema";
import Link from 'next/link';

export default function Home() {
  const { temas, agregarTema } = useContextTema();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Temas</h1>
      <ul>
        {temas.map((tema) => (
          <li key={tema.id} style={{ margin: "10px 0" }}>
            <span>{tema.titulo}</span>
            <button
              onClick={() => agregarTema(tema)}
              style={{ marginLeft: "10px" }}
            >
              {tema.interesante ? "No Interesante" : "Marcar como Interesante"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
