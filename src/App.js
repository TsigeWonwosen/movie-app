import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav, Error, Movies, Login, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={ () => <Movies/>} />
          <Route exact path="/login" component={Login} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
