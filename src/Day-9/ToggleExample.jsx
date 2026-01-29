import useToggle from "./UseToggle";

const ToggleExample = () => {

    /// Step 5: use custom hook
    const [isOpen, toggle] = useToggle(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white px-8 py-6 rounded-md shadow-sm text-center w-64">

                <h2 className="text-xl font-semibold text-slate-700 mb-4">
                    {isOpen ? "Open" : "Closed"}
                </h2>

                <button
                    onClick={toggle}
                    className="px-4 py-2 text-sm rounded border bg-slate-700 text-white hover:bg-slate-800 transition"
                >
                    Toggle
                </button>

            </div>
        </div>
    )
}

export default ToggleExample;
