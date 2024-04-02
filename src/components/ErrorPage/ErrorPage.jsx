import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
        <div>
            <h1>Oh no, this page doesn't exist yet</h1>
            <Link to="/">
                Click here too return too the Homepage.
            </Link>
        </div>
    )
}

export default ErrorPage