// type Props = {}

import AuthNav from './AuthNav';
import HeaderNavigation from './HeaderNavigation';

// function AppBar({}: Props) {
function AppBar() {
  return (
    <header className="flex justify-between w-full items-center max-w-(1184px) h-(96px) gap-10  py-8.5  mx-auto border-b">
      <a href="/" aria-label="Site logo">
        <span className="text-accent">psychologists.</span>services
      </a>
      <HeaderNavigation />
      <AuthNav />
      header
    </header>
  );
}

export default AppBar;
