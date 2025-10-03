// import Arrow1Icon from './assets/icons/arrow-up.svg?react';
// import StarIcon from './assets/icons/star.svg?react';

import { lazy, Suspense } from 'react';
import Layout from './Layout';
import Loader from './Loader';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const PsychologistsPage = lazy(
  () => import('../pages/PsychologistsPage/PsychologistsPage')
);
const FavoritesPage = lazy(
  () => import('../pages/FavoritesPage/FavoritesPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegistrationPage />}
                />
              }
            />

            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            /> */}
          <Route path="/psycologists" element={<PsychologistsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
