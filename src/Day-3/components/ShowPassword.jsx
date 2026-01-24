import React, { useState } from "react";

const ShowPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-amber-50">
            <div className="flex items-center gap-2 bg-white p-4 rounded-md shadow-sm">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="px-3 py-2 border rounded-md outline-none "
                />

                <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-sm px-3 py-2 border rounded-md bg-amber-100 hover:bg-amber-200 transition"
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
        </div>
    );
};

export default ShowPassword;
