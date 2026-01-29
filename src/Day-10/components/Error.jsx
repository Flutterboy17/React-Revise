/// Step 1: Error component
const Error = ({ message }) => {

    /// Step 2: guard clause
    if (!message) return null

    return (
        <p>{message}</p>
    )
}

export default Error
