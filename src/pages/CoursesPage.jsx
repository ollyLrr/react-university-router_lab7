import { useLoaderData } from "react-router-dom";
import { courses } from "../data/professors.js";

export function coursesLoader({ params }) {
  const profCourses = courses.filter(c => c.profId === Number(params.profId));
  return profCourses;
}


export default function CoursesPage() {
  const profCourses = useLoaderData();
  return (
    <div>
      <h3>Courses:</h3>
      <ul>
        {profCourses.map(c => <li key={c.name}>{c.name}</li>)}
      </ul>
    </div>
  );
}
