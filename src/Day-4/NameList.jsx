import React from "react";

const NameList = () => {
    const names = ["Alice", "Bob", "Charlie", "Diana",];

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white p-6 rounded-md shadow-sm w-64">
                <h2 className="text-lg font-semibold mb-4 text-slate-700">
                    Name List
                </h2>

                <div className="space-y-2">
                    {names.map((name, index) => (
                        <div
                            key={index}
                            className="px-3 py-2 bg-slate-50 rounded border text-slate-600"
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NameList;
