import React, { useEffect, useState } from "react";

const FetchPostsWithStatus = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded-md shadow-sm w-96">
        <h1 className="text-lg font-semibold mb-4 text-slate-700">
          Posts
        </h1>

        {/* Loading state */}
        {loading && (
          <p className="text-slate-500 text-sm text-center">
            Loading posts...
          </p>
        )}

        {/* Error state */}
        {error && (
          <p className="text-red-500 text-sm text-center">
            {error}
          </p>
        )}

        {/* Data state */}
        {!loading && !error && (
          <div className="space-y-2">
            {posts.map((post) => (
              <div
                key={post.id}
                className="px-3 py-2 bg-slate-50 border rounded text-slate-600 text-sm"
              >
                {post.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchPostsWithStatus;
