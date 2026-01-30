import { Form, useSearchParams } from "react-router-dom";

export default function SearchForm({ placeholder = "Search...", param = "q" }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get(param) || "";

  return (
    <Form method="get">
      <input
        type="text"
        name={param}
        defaultValue={query}
        placeholder={placeholder}
      />
      <button type="submit">Search</button>
    </Form>
  );
}
