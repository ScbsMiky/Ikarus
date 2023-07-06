import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Ikarus from "./libs/ikarus/ikarus";
import { GlobalIkarus } from "./global/ikarus";

import MainRouter from "./routes/main";

import { Container, GlobalStyle } from "./global/style";
import { MainTheme } from "./global/theme/default";

import { ThemeProvider } from "styled-components";
import usePersisted from "./libs/usePersisted";
import { Guild, RelationShip, User } from "./libs/ikarus/types";

const App: React.FC = ( ) => {
  const [token] = usePersisted("token", "");

  const [user, setUser] = useState<User>({ } as User);
  const [guilds, setGuilds] = useState<Guild[ ]>([ ]);
  const [relations, setRelations] = useState<RelationShip[ ]>([ ]);

  useEffect(( ) => {
    const ikarus = new Ikarus(token);

    ikarus.on("READY", ( ) => {
      setUser(ikarus.user);
      setGuilds(ikarus.guilds);
      setRelations(ikarus.relations);
    });
  }, [ ]);

  return (
    <GlobalIkarus.Provider value={{ user, guilds, relations }}>
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