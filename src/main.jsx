import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './app/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
)
