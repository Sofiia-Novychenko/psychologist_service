// type Props = {}

import AuthNav from './AuthNav';
import HeaderNavigation from './HeaderNavigation';

// function AppBar({}: Props) {
function AppBar() {
  return (
    <header className="bg-bg-main fixed z-50 inset-x-0 top-0 w-full h-24 flex justify-between items-center border-b border-[#191a151a] px-4">
      <div className="max-w-[1184px] w-full mx-auto flex justify-between items-center py-2.5  ">
        <div className="flex mr-10">
          <a
            href="/"
            aria-label="Site logo"
            className="text-xl leading-6 tracking-[-0.02em] font-semibold mr-10 sm:mr-32.5"
          >
            <span className="text-accent font-bold ">psychologists.</span>
            services
          </a>
          <HeaderNavigation />
        </div>
        <AuthNav />
      </div>
    </header>
  );
}

export default AppBar;
