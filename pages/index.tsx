import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = (props) => {
  console.log({ props });
  return (
    <Layout title="Listado de pokemon">
      <h1>hola</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("Hola mundo");
  return {
    props: {
      name: "Erick",
    },
  };
};

export default HomePage;
