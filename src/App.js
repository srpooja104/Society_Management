
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import RegistrationForm from './components/pages/Register';
import Otp from './components/pages/Otp';
import ForgetPassword from './components/pages/ForgetPassword';
import ResetPassword from './components/pages/ResetPassword';
import Header from './components/Dashboard/Header';
import Sidebar from './components/Dashboard/Sidebar';
import DashboardPage from './components/Dashboard/DahboardPage';
import FinancialManagement from './components/Financial/FinancialManagement';
import MaintenanceDetails from './components/Financial/MaintenanceDetails';
import OtherIncome from './components/Financial/OtherIncome';
import EditProfile from './components/Edit-profile/EditProfile';
import ResidentManagement from './components/Resident/ResidentManagement';
import ComplaintandRequestTracking from './components/Complaint and Request Tracking/Complaint';

function App() {
  return (
    <Router>
       <div className="flex min-h-screen bg-gray-100">
       { <Sidebar />}
       <div className="flex-1 flex flex-col">
       { <Header />}
       <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path='/forgot-password' element={<ForgetPassword/>}></Route>
          <Route path='/otp' element={<Otp/>}></Route>
          <Route path='/reset-password' element={<ResetPassword/>}></Route>
          <Route path='/header' element={<Header/>}></Route>
          <Route path='/sidebar' element={<Sidebar/>}></Route>
          <Route path='/dashboard' element={<DashboardPage/>}></Route> 
          <Route path='/resident' element={<ResidentManagement/>}></Route>
          <Route path='/edit-profile' element={<EditProfile/>}></Route>
          <Route path='/financial' element={<FinancialManagement/>}></Route> 
          <Route path='/complaint' element={<ComplaintandRequestTracking/>}></Route>
       </Routes>
       </main>
       </div>
       </div>
    </Router>
  );
}
export default App;