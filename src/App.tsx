import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Ikarus from "./libs/ikarus/ikarus";
import { GlobalIkarus } from "./global/ikarus";

import MainRouter from "./routes/main";

import { Container, GlobalStyle } from "./global/style";
import { MainTheme } from "./global/theme/default";

import { ThemeProvider } from "styled-components";
import usePersisted from "./libs/usePersisted";

const App: React.FC = ( ) => {
  const [token] = usePersisted("token", "");

  const [ikarus] = useState(new Ikarus(token));
  const [globalIkarus, setGlobalIkarus] = useState<Ikarus>({ ...ikarus } as Ikarus);

  const updateIkarus = ( ) => {
    setGlobalIkarus({
      token: ikarus.token,
      user: ikarus.user,
      guilds: ikarus.guilds,
      relations: ikarus.relations
    } as Ikarus);

    console.log(ikarus.relations)
  };

  useEffect(( ) => {
    ikarus.on("READY", ( ) => updateIkarus( ));
  }, [ ]);

  return (
    <GlobalIkarus.Provider value={globalIkarus}>
      <ThemeProvider theme={MainTheme}>
        <Container>
          <GlobalStyle />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainRouter />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </GlobalIkarus.Provider>
  );
};

export default App;