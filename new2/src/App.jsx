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
          <Route path="/ok" element={<Homepage/>} />
          <Route path="/logi" element={<Login />} />
          <Route path="/form" element={<ApplicationForm />} />
          <Route path="/success" element={<SubmissionSuccess />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/training" element={<Training />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/gp-rating" element={<GPRating />} />
          <Route path="/ccmc" element={<CCMC/>} />
          <Route path="/gallery" element={<Gallery />} />

{/*           <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/training" element={<Training/>} />
          <Route path="/vacancy" element={<Vacancy/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/gp-rating" element={<GPRating/>} />
          <Route path="/ccmc" element={<CCMC/>} />
          <Route path="/gallery" element={<Gallery/>} /> */}

          <Route
            path="/admi"
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
