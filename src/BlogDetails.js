import { useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error } = useFetch('https://jsonplaceholder.typicode.com/comments/' + id);
    return (
        <div className="blog-details">
            { error && <div>{error}</div>}
            { blog &&
                <div>
                    <h2>{blog.name}</h2>
                    <p>{blog.body}</p>
                </div>}
        </div >
    )
}

export default BlogDetails;