import React, { Suspense } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './App.css';

import ProtectedRoute from './components/ProtectedRoute';
import LoginLoader from './components/ContentLoader/LoginLoader';
import { PrivateRoutes, PublicRoutes } from './navigation/routes';


const Navbar = React.lazy(() => import('./components/Navbar'));
const Login = React.lazy(()=> import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));

const CheckPatientSchedule = React.lazy(()=> import('./pages/CheckPatientSchedule/CheckPatientSchedule'));
const ChangeHistory = React.lazy(()=> import('./pages/ChangeHistory/ChangeHistory'));
const CustomizedCalendar = React.lazy(()=> import('./components/CustomizedCalendar/CustomizedCalendar'));

const App = () => {
  // Plantilla para incluir Navbar
  function GlobalTemplate(){
    return (
      <>
        <Navbar/>
        <Suspense fallback={<LoginLoader/>}>
          <Outlet/>
        </Suspense>
      </>
    )
  } 

  // De forma momentanea solo entra a rutas protegidas teniendo un token, pudiendo ser cualquiera.
  return (
    <Routes>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route 
        path={PublicRoutes.LOGIN} 
        element={<Suspense fallback={<LoginLoader />}><Login /></Suspense>} 
      />
      {/* Rutas protegidas por el token */}
      <Route element={<ProtectedRoute />}>
        <Route element={<GlobalTemplate/>}>
          <Route path={PrivateRoutes.HOME} element={<Home />} />
          <Route path={PrivateRoutes.CHECKPATIENTSCHEDULE} element={<CheckPatientSchedule />} />
          <Route path={PrivateRoutes.CHANGEHISTORY} element={<ChangeHistory />} />
          <Route path={PrivateRoutes.CALENDAR} element={<CustomizedCalendar />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={PrivateRoutes.HOME} />} />
    </Routes>
  )
}

export default App;