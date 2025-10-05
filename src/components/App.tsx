import { lazy, Suspense } from 'react';
import Layout from './Layout';
import Loader from './ui/Loader';
import { Route, Routes, useLocation } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const PsychologistsPage = lazy(
  () => import('../pages/PsychologistsPage/PsychologistsPage')
);
const FavoritesPage = lazy(
  () => import('../pages/FavoritesPage/FavoritesPage')
);
const LoginPage = lazy(() => import('../pages/HomePage/LoginPage'));
const RegistrationPage = lazy(
  () => import('../pages/HomePage/RegistrationPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  return (
    <Suspense fallback={<Loader />}>
      <Routes location={state?.backgroundLocation || location}>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute redirectTo="/login" component={<FavoritesPage />} />
            }
          />
          {/* //! Доступно лише НЕавторизованим користувачам */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/psychologists"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/psychologists"
                component={<LoginPage />}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          {/* //! Доступно лише НЕавторизованим користувачам */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/psychologists"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/psychologists"
                component={<LoginPage />}
              />
            }
          />
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
