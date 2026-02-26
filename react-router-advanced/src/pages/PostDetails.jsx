import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

export default function PostDetails() {

  const { id } = useParams();

  const fetchPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    return response.json();
  };

  const {
    data,
    isLoading,
    error,
  } = useQuery(["post", id], fetchPost);

  if (isLoading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>Error loading post</p>;
  }

  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">
        {data.title}
      </h1>

      <p>{data.body}</p>

    </div>
  );
}