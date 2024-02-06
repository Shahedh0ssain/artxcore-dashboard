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
import ContentCreate from './Components/Content/ContentCreate';
import AllContent from './Components/Content/AllContent';
import UpdateContent from './Components/Content/UpdateContent';
import AllWriterContent from './Components/Content/AllWriterContent';
import CreateManu from './Components/Allmanu/CreateManu';
import AllManu from './Components/Allmanu/AllManu';
import ViewManu from './Components/Allmanu/ViewManu';
import UpdateManu from './Components/Allmanu/UpdateManu';
import ViewContent from './Components/Content/VIewContent';
import AllDeleteContent from './Components/Content/AllDeleteContent';
import AllDeleteManu from './Components/Allmanu/AllDeleteManu';

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
              {/* all content */}
              <Route path='/contentcreate' element={<ContentCreate />}></Route>
              <Route path='/allcontent' element={<AllContent />}></Route>
              <Route path='/allcontent/content/:contentId' element={<ViewContent />}></Route>
              <Route path='/allcontent/updatecontent/:contentId' element={<UpdateContent />}></Route>
              <Route path='/alldeletecontent' element={<AllDeleteContent />}></Route>
              {/* all manu */}
              <Route path='/createManu' element={<CreateManu />}></Route>
              <Route path='/allmanu' element={<AllManu />}></Route>
              <Route path='/allmanu/viewmanu/:manuId' element={<ViewManu />}></Route>
              <Route path='/allmanu/updatemanu/:manuId' element={<UpdateManu />}></Route>
              <Route path='/alldeletemanu' element={<AllDeleteManu />}></Route>


            </Route>

          </Route>

        </Route>
      </Routes>
      <Toaster />

    </div>


  );
}

export default App;
