import { useReducer } from "react";

/// Step 1: create reducer function
const counterReducer = (state, action) => {

    /// Step 2: check which action happened
    if (action.type === "INCREMENT") {

        /// Step 3: return NEW state (count increased)
        return {
            count: state.count + 1
        }
    }

    /// Step 4: check decrement action
    if (action.type === "DECREMENT") {

        /// Step 5: return NEW state (count decreased)
        return {
            count: state.count - 1
        }
    }

    /// Step 6: check reset action
    if (action.type === "RESET") {

        /// Step 7: reset count to zero
        return {
            count: 0
        }
    }

    /// Step 8: if action is unknown, return existing state
    return state;
}

const ReducerCounter = () => {

    /// Step 10: initialize reducer
    /// state = { count: 0 }
    /// dispatch = function to send actions
    const [state, dispatch] = useReducer(counterReducer, { count: 0 })

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white p-6 rounded-md shadow-sm text-center w-72">

                {/* /// Step 11: display state value */}
                <p className="text-sm text-slate-500 mb-1">Counter</p>
                <h2 className="text-3xl font-semibold text-slate-700 mb-6">
                    {state.count}
                </h2>

                <div className="flex gap-3 justify-center">
                    {/* /// Step 13: dispatch DECREMENT action */}
                    <button
                        onClick={() => dispatch({ type: "DECREMENT" })}
                        className="px-4 py-2 text-sm rounded border bg-slate-200 hover:bg-slate-300 transition"
                    >
                        Decrease
                    </button>

                    {/* /// Step 12: dispatch INCREMENT action */}
                    <button
                        onClick={() => dispatch({ type: "INCREMENT" })}
                        className="px-4 py-2 text-sm rounded border bg-slate-700 text-white hover:bg-slate-800 transition"
                    >
                        Increase
                    </button>
                </div>

                {/* /// Step 14: dispatch RESET action */}
                <button
                    onClick={() => dispatch({ type: "RESET" })}
                    className="mt-4 text-xs text-slate-500 hover:text-slate-700 transition"
                >
                    Reset
                </button>

            </div>
        </div>
    )
}

export default ReducerCounter;
