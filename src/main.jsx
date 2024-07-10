import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import { BankActivityProvider } from './context/bankActivity.jsx';
import { ThemeContextProvider } from './context/themeContect.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <BankActivityProvider>
      <App />
    </BankActivityProvider>,
  </ThemeContextProvider>
);
