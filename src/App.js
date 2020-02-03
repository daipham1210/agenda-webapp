import React from 'react';
import './App.css';
import Wrapper from 'containers/Wrapper';
import Category from 'containers/Category';
import Main from 'containers/Main';
import Toolbar from 'containers/Toolbar';
import Router from 'routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper>
          <Category />
          <Main>
            <Router />
          </Main>
          <Toolbar />
        </Wrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
