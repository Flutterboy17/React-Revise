import { useState } from "react"

const SimpleForm = () => {
    const [name, setName] = useState("")

    const handleForm = (event) => {
        event.preventDefault()
        alert("Submitted name: " + name);

    }

    return (
        <div className="flex flex-col justify-center items-center bg-amber-100 h-screen gap-2">
            <div className="rounded-2xl bg-white p-6 shadow-md text-center text-2xl">
                <form onSubmit={handleForm} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="border rounded text-md pl-2 py-2"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <button
                        className="rounded bg-amber-500 text-sm px-4 py-2 font-medium text-white hover:bg-amber-600 transition cursor-pointer"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SimpleForm
