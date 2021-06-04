import { useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { darkModeVar, isLoggeedInVar } from './apollo';
import Home from './screens/Home';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from './styles';



function App() {
  const isLoggedIn = useReactiveVar(isLoggeedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ?
              <Home /> :
              <Login />}
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
