import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav, Error, Home,Movies ,Login, Footer } from './components';
import { MovieProvider } from './context/ContextProvider';
function App() {
  return (
    <div className="App">
      <MovieProvider>
        <>
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movies" component={Movies} />

              <Route exact path="/login" component={Login} />
              <Route path="*" component={Error} />
            </Switch>
            <Footer />
          </Router>
        </>
      </MovieProvider>
    </div>
  );
}

export default App;
