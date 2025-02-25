import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login/Login';

import { Toaster } from 'react-hot-toast';
import SubmissionSuccess from './pages/formsubmitdone/FormSubmitDone';
import AdminPanel from './admin/dashboard/Dashboard';
import { AppContextProvider } from '../context';

import ProtectedRoute from './protectRoute';
import Homepage from './components/Homepage';
import ApplicationForm from './Shared/ApplyFormEl';
import AboutUs from './components/AboutUs';
import Training from './components/Training';
import Vacancy from './components/Vacancy';
import Contact from './components/Contact';
import GPRating from './components/GPRating';
import CCMC from './components/CCMC';
import Gallery from './components/Gallery';


function App() {
  return (
    <AppContextProvider>
      <Router>
        <Toaster />

        <Routes>
          <Route path="/" element={<h1 style={{text-align="center"}}>Server Not Available</h1>} />
          <Route path="/logi" element={<Login />} />
          <Route path="/for" element={<ApplicationForm />} />
          <Route path="/succes" element={<SubmissionSuccess />} />
          {/* <Route path="/contac" element={<ContactPage />} /> */}

          <Route path="/about-u" element={<AboutUs />} />
          <Route path="/trainin" element={<Training />} />
          <Route path="/vacanc" element={<Vacancy />} />
          <Route path="/contact-u" element={<Contact />} />
          <Route path="/gp-ratin" element={<GPRating />} />
          <Route path="/ccm" element={<CCMC />} />
          <Route path="/galler" element={<Gallery />} />

          <Route path="/about-u" element={<AboutUs/>} />
          <Route path="/trainin" element={<Training/>} />
          <Route path="/vacanc" element={<Vacancy/>} />
          <Route path="/contact-u" element={<Contact/>} />
          <Route path="/gp-ratin" element={<GPRating/>} />
          <Route path="/ccm" element={<CCMC/>} />
          <Route path="/galler" element={<Gallery/>} />

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
