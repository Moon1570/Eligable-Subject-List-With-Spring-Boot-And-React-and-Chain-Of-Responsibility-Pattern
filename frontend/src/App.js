import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import FormComponent from './components/FormComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SubjectComponent from './components/SubjectComponent';


function App() {
  return (
    
    <div className="container">
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path="/" exact component={FormComponent}></Route>
                <Route path="/subjects" component={SubjectComponent}></Route>
                <Route path="/form" component={FormComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
