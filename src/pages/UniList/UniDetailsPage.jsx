import { useLoaderData } from "react-router-dom";

export async function uniDetailsLoader({ params }) {
  const res = await fetch(`http://universities.hipolabs.com/search?name=${params.name}`);

  if (!res.ok) {
    throw new Response("Failed to fetch university details", { status: res.status });
  }

  const data = await res.json();
  return data[0] || null;
}

export default function UniDetailsPage() {
  const university = useLoaderData();

  if (!university) {
    return <p>University not found</p>;
  }

  return (
    <div>
      <h2>{university.name}</h2>
      <p>Country: {university.country}</p>
      <p>Web page: <a href={university.web_pages[0]} target="_blank">{university.web_pages[0]}</a></p>
      <p>Domain: {university.domains[0]}</p>
    </div>
  );
}
