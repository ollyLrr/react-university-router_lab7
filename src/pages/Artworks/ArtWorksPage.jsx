import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArtworks, setQuery } from "../../features/artworks/artworksSlice";
import SearchForm from "../../components/SearchForm";
import { Link } from "react-router-dom";
import "./ArtWorksPage.css";

export default function ArtWorksPage() {
  const { items, isLoading, error, query } = useSelector(
    (state) => state.artworks
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtworks(query));
  }, [dispatch, query]);

  const handleSearch = (newQuery) => {
    dispatch(setQuery(newQuery));
  };

  return (
    <div className="art-list-container">
      <h2>Artworks</h2>

      <SearchForm
        placeholder="Search artworks"
        onSearch={handleSearch}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoading && items.length === 0 && <p>No artworks found</p>}

      <ul className="art-list-grid">
        {items.map((art) => (
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
