import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NotificationsPage from "./pages/NotificationsPage";

function App() {
  return (
    <NotificationProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="*" element={<div>404 - Page non trouvée</div>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;
