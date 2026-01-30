import { useLoaderData, Link, useNavigation } from "react-router-dom";
import SearchForm from "../components/SearchForm";

export async function uniListLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("name") || "";

  const res = await fetch(
    query
      ? `https://universities.hipolabs.com/search?name=${query}`
      : `https://universities.hipolabs.com/search?name=Middle`
  );

  if (!res.ok) {
    throw new Response("Failed to fetch universities", { status: res.status });
  }

  let universities = await res.json();

  if (!query) {
    universities = universities.slice(0, 20);
  }

  return universities;
}


export default function UniListPage() {
  const universities = useLoaderData();
  const navigation = useNavigation();

  return (
    <div>
      <h2>Universities</h2>
      <SearchForm />

      {navigation.state === "loading" && <p>Loading...</p>}
      {universities.length === 0 && <p>No universities found</p>}

      <ul>
        {universities.map((uni) => (
          <li key={uni.name}>
            <Link to={`/universities/${encodeURIComponent(uni.name)}`}>
              {uni.name} ({uni.country})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
