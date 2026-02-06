
import { Outlet, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ui/uiSlice";
import "./Root.css";

export default function Root() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div className={`app ${theme}`}>
      <header>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/artworks">Our Artworks</NavLink>
          <NavLink to="/admin">Admin</NavLink>

          <button  onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
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
