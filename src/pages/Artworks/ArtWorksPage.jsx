
import { useLoaderData, Link, useNavigation } from "react-router-dom";
import SearchForm from "../../components/SearchForm";
import "./ArtWorksPage.css";

export async function artWorksLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "monet";

  const res = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}&limit=20&fields=id,title,image_id,artist_title,date_display`);
  if (!res.ok) throw new Response("Failed to fetch artworks", { status: res.status });

  const data = await res.json();
  return data.data;
}

export default function ArtWorksPage() {
  const artworks = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className="art-list-container">
      <h2>Artworks</h2>
      <SearchForm placeholder="Search artworks " paramName="q" />

      {navigation.state === "loading" && <p>Loading...</p>}
      {artworks.length === 0 && <p>No artworks found</p>}

      <ul className="art-list-grid">
        {artworks.map((art) => (
          <li key={art.id} className="art-list-item">
            <Link to={`/artworks/${art.id}`}>
              {art.image_id && (
                <img
                  src={`https://www.artic.edu/iiif/2/${art.image_id}/full/200,/0/default.jpg`}
                  alt={art.title}
                />
              )}
              <h3>{art.title}</h3>
              <p>{art.artist_title || "Unknown"}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
