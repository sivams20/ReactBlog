import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <p>Page cannot be found!</p>
            <Link to="/">Back to the home page</Link>
        </div>
    )
}

export default NotFound;