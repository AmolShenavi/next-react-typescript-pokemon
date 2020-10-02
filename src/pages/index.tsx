import React, { Fragment } from "react";
import Layout from "../components/Layout";
import PokemonList from "../components/pokemon-list";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript">
    <Fragment>
      <h2 style={{ textAlign: "center" }}>Pokemon List</h2>
      <PokemonList />
    </Fragment>
  </Layout>
);

export default IndexPage;
