
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Analytics } from "@vercel/analytics/remix"
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
