import { Link, useLocation } from 'react-router-dom';

function AuthNav() {
  const location = useLocation();
  return (
    <ul className="flex gap-2 font-medium leading-tight tracking-[-0.01em]">
      <li className="w-full h-12 px-9.75 py-3.5 border border-[#191a151a] rounded-[30px] text-nowrap flex items-center justify-center cursor-pointer hover:shadow-lg">
        <Link to={'/login'} state={{ backgroundLocation: location }}>
          Log In
        </Link>
      </li>
      <li className=" w-full h-12 px-9.75 py-3.5 rounded-[30px] bg-accent text-bg-main flex items-center justify-center cursor-pointer  hover:bg-accent-hover">
        <Link to={'/register'} state={{ backgroundLocation: location }}>
          Registration
        </Link>
      </li>
    </ul>
  );
}

export default AuthNav;
