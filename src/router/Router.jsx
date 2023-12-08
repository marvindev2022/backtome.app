import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Main from '../pages/main';
import App from './../animation/App';
import RenderPlatform from './../pages/Platform';
import About from './../pages/about/about';
import Adoption from './../pages/adoption';
import AdoptionSearch from './../pages/adoptionSearch';
import RenderHelp from './../pages/help/help';
import RecoverPassword from './../pages/recover';

export default function MainRouter() {
  function ProtectedRoutes({ redirectTo }) {
    const token = localStorage.getItem('token');
    return token ? <Outlet /> : <Navigate to={redirectTo} />;
  }
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<App />} />
      <Route path="/login" element={<App />} />
      <Route path="/forget" element={<App />} />
      <Route path="/recover/*" element={<RecoverPassword />} />
      <Route path="/adopt" element={<Adoption />} />
      <Route path="/adopt/search" element={<AdoptionSearch />} />
      <Route path="/platform" element={<RenderPlatform />} />
      <Route path="/help" element={<RenderHelp />} />
      <Route path="/about" element={<About />} />
      <Route element={<ProtectedRoutes redirectTo="/" />}>
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  );
}
