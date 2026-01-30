import { Link } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Welcome to University Page!</h1>
      <img src="/src/assets/logo.png" alt="University Logo" width={300}/>
      <p>Select a department, professor, or view courses:</p>

      <div className="section">
        <h3>Departments:</h3>
        <div className="button-group">
          <Link to="/departments/1">
            <button>Computer Science</button>
          </Link>
          <Link to="/departments/2">
            <button>Mathematics</button>
          </Link>
          <Link to="/departments/3">
            <button>Physics</button>
          </Link>
          <Link to="/departments/4">
            <button>Art</button>
          </Link>
          <Link to="/departments/5">
            <button>Architecture</button>
          </Link>
        </div>
      </div>

      <div className="section">
        <h3>Professors:</h3>
        <div className="button-group">
          <Link to="/professors/1">
            <button>Dr. Smith</button>
          </Link>
          <Link to="/professors/2">
            <button>Dr. Johnson</button>
          </Link>
          <Link to="/professors/3">
            <button>Dr. Williams</button>
          </Link>
          <Link to="/professors/4">
            <button>Dr. Brown</button>
          </Link>
        </div>
      </div>

      <div className="section">
        <h3>Professor Courses:</h3>
        <div className="button-group">
          <Link to="/professors/1/courses">
            <button>Dr. Smith's Courses</button>
          </Link>
          <Link to="/professors/2/courses">
            <button>Dr. Johnson's Courses</button>
          </Link>
          <Link to="/professors/3/courses">
            <button>Dr. Williams's Courses</button>
          </Link>
          <Link to="/professors/4/courses">
            <button>Dr. Brown's Courses</button>
          </Link>

        </div>
      </div>
    </div>
  );
}
