import React from "react";
import Navbar from "../components/Navbar/Navbar";
import BloqueA from "../components/BloqueA/BloqueA";
import BloquePrincipal from "../components/BloquePrincipal/BloquePrincipal";
import { ChakraProvider, Container, Spacer } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
        <BloquePrincipal />
        <BloqueA />
        {/*
      <Widget />
      <PrimerBloque />
      <SegundoBloque />
      <TercerBloque />
      <CuartoBloque />
      <QuintoBloque />
      <SextoBloque />
      <SeptimoBloque />
      <Footer /> */}
      </div>
    </ChakraProvider>
  );
};

export default HomePage;
