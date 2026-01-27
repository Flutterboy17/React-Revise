import React, { useEffect, useState } from "react";

const FetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white p-6 rounded-md shadow-sm w-80">
                <h1 className="text-lg font-semibold mb-4 text-slate-700">
                    Users List
                </h1>

                {/* Loading UI */}
                {loading && (
                    <p className="text-slate-500 text-sm text-center">
                        Loading users...
                    </p>
                )}

                {/* Error UI */}
                {error && (
                    <p className="text-red-500 text-sm text-center">
                        {error}
                    </p>
                )}

                {/* Users UI */}
                {!loading && !error && (
                    <div className="space-y-2">
                        {users.map((user) => (
                            <div
                                key={user.id}
                                className="px-3 py-2 bg-slate-50 border rounded text-slate-600"
                            >
                                {user.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FetchUsers;
