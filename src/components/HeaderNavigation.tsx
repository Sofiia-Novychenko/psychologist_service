import { NavLink } from 'react-router-dom';

function HeaderNavigation() {
  return (
    <nav className="">
      <ul className="flex gap-10 leading-tight tracking-[-0.01em]">
        <li>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? "relative after:content-[''] after:absolute after:top-5.5 after:left-1/2  after:-translate-x-1/2 after:size-2 after:rounded-full after:bg-accent"
                : ''
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/psychologists'}
            className={({ isActive }) =>
              isActive
                ? "relative after:content-[''] after:absolute after:top-5.5 after:left-1/2  after:-translate-x-1/2 after:size-2 after:rounded-full after:bg-accent"
                : ''
            }
          >
            Psychologists
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
