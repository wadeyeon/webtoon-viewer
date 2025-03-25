import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Viewer from './pages/Viewer.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='viewer' element={<Viewer />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
