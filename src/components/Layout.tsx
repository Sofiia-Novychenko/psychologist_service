import { type ReactNode } from 'react';
import AppBar from './AppBar';

type Props = { children: ReactNode };

function Layout({ children }: Props) {
  return (
    <>
      <AppBar />
      <main className="pt-24 w-full min-h-screen bg-amber-500">
        <div className="max-w-[1440px] mx-auto px-4 ">{children}</div>
      </main>
    </>
  );
}

export default Layout;
