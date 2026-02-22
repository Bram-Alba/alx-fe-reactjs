import { useQuery } from "react-query";

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
      // React Query caching options
      cacheTime: 1000 * 60 * 5, // 5 minutes
      staleTime: 1000 * 30,     // 30 seconds
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  if (isLoading) return <p className="text-center mt-4">Loading posts...</p>;
  if (isError)
    return (
      <p className="text-center mt-4 text-red-500">Error: {error.message}</p>
    );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Posts</h1>
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
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}