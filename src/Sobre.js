import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class Sobre extends Component {
 render() {
 return (
    <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">P�gina de Sobre</h1>
       </header>
       <p className="App-intro">
            Exemplo de P�gina Sobre :)
 			<Link to="/">Ir para a p�gina incial</Link>
       </p>
    </div>
 );
 }
}

export default Sobre;