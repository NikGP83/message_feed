import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { setupStore } from './components/store/store';

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
