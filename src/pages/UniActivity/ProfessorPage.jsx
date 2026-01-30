import { Outlet, useLoaderData } from "react-router-dom";
import { professors } from "../../data/professors.js";

export function professorLoader({ params }) {
  const prof = professors.find(p => p.id === Number(params.profId));
  if (!prof) throw new Response("Professor not found", { status: 404 });
  return prof;
}
export default function ProfessorPage() {
  const prof = useLoaderData();
  return (
    <div>
      <h2>Professor: {prof.name}</h2>
      <p>Additional information: {prof.about}</p>
      <p>Experience: {prof.experience}</p>
      <Outlet />
    </div>
  );
}
