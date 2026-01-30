import { Outlet, NavLink } from "react-router-dom";
import "./Root.css";

export default function Root() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 My University Page</p>
      </footer>
    </div>
  );
}
