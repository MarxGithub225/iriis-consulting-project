import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from "./App/Components/Footer";
import Header from "./App/Components/Header";
import ConsultantsView from "./App/Modules/Consultants";
import CandidateDetails from "./App/Modules/Consultants/Components/CandidateDetails";
import Contact from "./App/Modules/Contact";
import Home from "./App/Modules/Home";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/consultants" component={ConsultantsView}/>
        <Route path="/cv/:reference" component={CandidateDetails}/>
        <Route path="/contacts" component={Contact}/>
          
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;