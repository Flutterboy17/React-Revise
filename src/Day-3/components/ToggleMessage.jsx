import { useState } from "react"

const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="p-4">
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
                Toggle Message
            </button>
            {isVisible && (
                <p className="mt-3 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200">
                    Hello, this message is visible
                </p>
            )}
        </div>
    )
}

export default ToggleMessage;