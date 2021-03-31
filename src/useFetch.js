import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(result => {
                if (!result.ok) {
                    throw Error('Could not fetch data from server');
                }
                return result.json();
            })
            .then(data => {
                console.log('data', data);
                setBlogs(data);
                setError(null);
            })
            .catch(err => {
                console.log('error', err.message);
                setError(err.message);
            })
    }, [url]);

    return { data, error };
}

export default useFetch;