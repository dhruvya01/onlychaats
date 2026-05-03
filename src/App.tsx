import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Quest';
import Menu from './pages/Menu';

export default function App() {
  return (
    <Router>
      <div className="bg-surface-bright text-on-surface min-h-screen font-epilogue selection:bg-secondary selection:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}
