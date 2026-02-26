import { useQuery } from "react-query";
import { Link } from "react-router-dom";  // ✅ ADD THIS LINE

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

export default function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 30,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  if (isLoading) return <p className="text-center mt-4">Loading posts...</p>;

  if (isError)
    return (
      <p className="text-center mt-4 text-red-500">
        Error: {error.message}
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4 text-center">
        Posts
      </h1>

      <button
        onClick={() => refetch()}
        className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Refetch Posts
      </button>

      <ul className="space-y-4">

        {data.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded shadow-sm hover:shadow-md"
          >

            <Link to={`/post/${post.id}`}>
              <h2 className="font-semibold text-lg text-blue-600 hover:underline">
                {post.title}
              </h2>
            </Link>

            <p className="text-gray-700">
              {post.body}
            </p>

          </li>
        ))}

      </ul>

    </div>
  );
}