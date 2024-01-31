import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import RequireAuth from './Components/authentation/RequireAuth';
import RequireAdmin from './Components/authentation/RequireAdmin';
import Dashboard from './Pages/Dashboard';
import MyProfile from './Components/MyProfile';
import Users from './Components/Users';
import UpdateProfile from './Components/UpdateProfile';
import NotFoundPage from './Pages/NotFoundPage';
import CreateUser from './Components/authentation/CreateUser';
import CreateSuperUser from './Components/authentation/CreateSuperUser';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import CreateAdminUser from './Components/authentation/CreateAdminUser';
import EmailVerify from './Components/authentation/EmailVerify';
import ContentCreate from './Components/ContentCreate';
import AllContent from './Components/AllContent';
import MyContent from './Components/Mycontent';
import UpdateContent from './Components/UpdateContent';
import AllWriterContent from './Components/AllWriterContent';

function App() {
  return (
    <div className=''>

      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/verifyemail' element={<EmailVerify />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
        <Route path='createuser' element={<CreateUser />}></Route>

        <Route element={<RequireAuth></RequireAuth>}>
          <Route
            path="/"
            element={<Dashboard />}>
            <Route path='createadminuser' element={<CreateAdminUser />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='createsuperuser' element={<CreateSuperUser />}></Route>
            <Route path='/users/profile/:userId' element={<MyProfile />}></Route>
            <Route path='users' element={<Users />}></Route>
            <Route path='/users/profileUpdate/:userId' element={<UpdateProfile />}></Route>
            <Route path='/allwritercontent' element={<AllWriterContent />}></Route>
            <Route element={<RequireAdmin></RequireAdmin>} >
              <Route path='/contentcreate' element={<ContentCreate />}></Route>
              <Route path='/allcontent' element={<AllContent />}></Route>
              <Route path='/allcontent/content/:contentId' element={<MyContent />}></Route>
              <Route path='/allcontent/updatecontent/:contentId' element={<UpdateContent />}></Route>

            </Route>
            {/* <Route path='/contentcreate' element={<ContentCreate />}></Route>
            <Route path='/allcontent' element={<AllContent />}></Route>
            <Route path='/users/content/:contentId' element={<MyContent />}></Route>
            <Route path='/users/updatecontent/:contentId' element={<UpdateContent />}></Route> */}

          </Route>

        </Route>
      </Routes>
      <Toaster />

    </div>


  );
}

export default App;
