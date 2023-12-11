import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div>
            <h1>Error</h1>
            <p>An error has occured:</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
}