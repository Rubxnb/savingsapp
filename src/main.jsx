import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BankActivityProvider } from './context/bankActivity.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BankActivityProvider>
    <App />
  </BankActivityProvider>,
);
