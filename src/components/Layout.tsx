import AppBar from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';

// type Props = { children: ReactNode };

function Layout() {
  return (
    <>
      <AppBar />
      <main className="pt-24 w-full min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 ">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
