import { useReducer } from "react";

/// Reducer function
const themeReducer = (state, action) => {

    if (action.type === "LIGHT") {
        return { theme: "light" };
    }

    if (action.type === "DARK") {
        return { theme: "dark" };
    }

    return state;
};

const ThemeReducer = () => {

    /// useReducer setup
    const [state, dispatch] = useReducer(themeReducer, { theme: "light" });

    return (
        <div
            className={`min-h-screen flex items-center justify-center ${state.theme === "dark" ? "bg-slate-900" : "bg-slate-100"
                }`}
        >
            <div
                className={`p-6 rounded-md shadow-sm text-center w-72 ${state.theme === "dark"
                        ? "bg-slate-800 text-white"
                        : "bg-white text-slate-800"
                    }`}
            >
                <h2 className="text-lg font-semibold mb-4">
                    Current Theme
                </h2>

                <p className="mb-6 text-sm">
                    {state.theme}
                </p>

                <div className="flex gap-3 justify-center">
                    <button
                        onClick={() => dispatch({ type: "LIGHT" })}
                        className="px-4 py-2 text-sm rounded border bg-slate-200 hover:bg-slate-300 transition"
                    >
                        Light
                    </button>

                    <button
                        onClick={() => dispatch({ type: "DARK" })}
                        className="px-4 py-2 text-sm rounded border bg-slate-700 text-white hover:bg-slate-800 transition"
                    >
                        Dark
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThemeReducer;
