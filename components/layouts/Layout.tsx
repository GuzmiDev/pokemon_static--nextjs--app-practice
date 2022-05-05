import { FC, ReactNode } from "react";
import Head from "next/head";
import { NavBar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Erick Guzman | GuzmiDev" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokémon, pokedex`} />
      </Head>
      <NavBar />

      <main
        style={{
          padding: "0px, 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
