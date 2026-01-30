import { useLoaderData } from "react-router-dom";

export async function userLoader({ params }) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
        throw new Response("Failed to fetch users", { status: 500 });
    }

    const users = await res.json();
    const user = users.find(u => u.id === Number(params.userId));

    if (!user) {
        throw new Response("User Not Found", { status: 404 });
    }

    return user;
}

export default function UserPage() {
    const user = useLoaderData();
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
        </div>
    );
}
