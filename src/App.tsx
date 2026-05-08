import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AboutPage } from './pages/AboutPage';
import { ReportsPage } from './pages/ReportsPage';
import { ContactPage } from './pages/ContactPage';
import { AutomationStackPage } from './pages/AutomationStackPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ReportsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/automation-stack" element={<AutomationStackPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
