import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/nav';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import ApplicationForm from './pages/formpage/FormPage';
import { Toaster } from 'react-hot-toast';
import SubmissionSuccess from './pages/formsubmitdone/FormSubmitDone';
import AdminPanel from './admin/dashboard/Dashboard';
import { AppContextProvider } from '../context';
import { ContactPage } from './pages/contect';
import ProtectedRoute from './protectRoute';

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<ApplicationForm />} />
          <Route path="/success" element={<SubmissionSuccess />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
