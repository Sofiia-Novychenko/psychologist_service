import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <ul className="flex gap-2 font-medium leading-tight tracking-[-0.01em]">
      <li className="w-full h-12 px-9.75 py-3.5 border border-[#191a151a] rounded-[30px] text-nowrap flex items-center justify-center">
        <NavLink to={'/login'} className="mx-auto ">
          Log In
        </NavLink>
      </li>
      <li className=" w-full h-12 px-9.75 py-3.5 rounded-[30px] bg-accent text-bg-main flex items-center justify-center">
        <NavLink to={'/register'}>Registration</NavLink>
      </li>
    </ul>
  );
}

export default AuthNav;
