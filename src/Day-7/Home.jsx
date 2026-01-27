import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export const Home = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div
            className={`min-h-screen flex items-center justify-center ${theme === "dark" ? "bg-slate-900" : "bg-slate-100"
                }`}
        >
            <div
                className={`p-6 rounded-md shadow-sm text-center w-72 ${theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-slate-800"
                    }`}
            >
                <h1 className="text-lg font-semibold mb-4">
                    Current Theme
                </h1>

                <p className="mb-6 text-sm">
                    {theme}
                </p>

                <div className="flex gap-3 justify-center">
                    <button
                        onClick={() => setTheme("dark")}
                        className="px-4 py-2 text-sm rounded border bg-slate-700 text-white hover:bg-slate-800 transition"
                    >
                        Dark
                    </button>

                    <button
                        onClick={() => setTheme("light")}
                        className="px-4 py-2 text-sm rounded border bg-slate-200 hover:bg-slate-300 transition"
                    >
                        Light
                    </button>
                </div>
            </div>
        </div>
    );
};
