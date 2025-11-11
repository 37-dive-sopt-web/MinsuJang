import 'normalize.css';
import '@shared/styles/global.css';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
