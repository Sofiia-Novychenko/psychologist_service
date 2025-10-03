import { type ReactNode } from 'react';
import AppBar from './AppBar';

type Props = { children: ReactNode };

function Layout({ children }: Props) {
  return (
    <>
      <AppBar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
