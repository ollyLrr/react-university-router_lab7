import { useLoaderData } from "react-router-dom";
import { departments } from "../../data/departments.js";

export function departmentLoader({ params }) {
  const dept = departments.find(d => d.id === Number(params.deptId));
  if (!dept) throw new Response("Department Not Found", { status: 404 });
  return dept;
}

export default function DepartmentPage() {
  const dept = useLoaderData();
  return (
    <div>
      <h2>{dept.name}</h2>
      <p>Department ID: {dept.id}</p>
      <p>Additional information: {dept.about}</p>
    </div>
  );
}
