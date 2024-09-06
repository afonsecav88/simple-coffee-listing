import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CoffeApp from './CoffeeApp.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoffeApp />
  </StrictMode>
);
