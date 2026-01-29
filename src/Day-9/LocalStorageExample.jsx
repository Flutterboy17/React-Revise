import React from "react";
import UseLocalStorage from "./UseLocalStorage";

const LocalStorageExample = () => {

    /// Step 6: use custom hook
    const [name, setName] = UseLocalStorage("username", "");

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white px-8 py-6 rounded-md shadow-sm w-72 text-center">

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 border rounded-md mb-4 outline-none focus:ring-2 focus:ring-slate-300"
                />

                <p className="text-slate-700">
                    Hello, <span className="font-semibold">{name || "Guest"}</span>
                </p>

            </div>
        </div>
    )
}

export default LocalStorageExample;
