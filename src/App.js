import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRoutes } from "./config/routes";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import { StylesProvider } from "@material-ui/core/styles";
import { GlobalStyles } from "./GloablStyles";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
              <Switch>
                {renderRoutes.map(([key, route]) => (
                  <Route
                    key={key}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
              </Switch>
            </BrowserRouter>
          </Suspense>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
