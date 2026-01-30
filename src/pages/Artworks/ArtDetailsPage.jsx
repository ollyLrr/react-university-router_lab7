import { useLoaderData, useNavigation } from "react-router-dom";

export async function artDetailsLoader({ params }) {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks/${params.artworkId}`);
  if (!res.ok) throw new Response("Failed to fetch artwork details", { status: res.status });
  const json = await res.json();
  return json.data;
}

export default function ArtDetailsPage() {
  const artwork = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>{artwork.title}</h2>
      <p>Artist: {artwork.artist_title || "Unknown"}</p>
      <p>Date: {artwork.date_display || "—"}</p>

      {artwork.image_id && (
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      )}
      <p>{artwork.place_of_origin}</p>
    </div>
  );
}
