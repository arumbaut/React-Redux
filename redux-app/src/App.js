import React from 'react';
import './App.css';
import store from './store';

import { Provider } from 'react-redux'

import moduleName from './store'
function App() {
  return (
    <Provider store={store}>
        <div className="container">
          <header>
              <h1 className="text-center">Administrador de Pacientes de Veterinaria</h1>
          </header>

          <div className="row mt-3">
              <div className="col-md-6">
                  sdasdas
              </div>
              <div className="col-md-6">
                  qweqweqw
              </div>
          </div>     
        </div>
    </Provider>
  );
}

export default App;
