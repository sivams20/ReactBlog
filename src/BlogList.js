import { Link } from "react-router-dom";

const BlogList = ({ blogs, deleteBlog }) => {
    return (
        <div className="blog-container">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <p>written by {blog.author}</p>
                </div>
            ))
            }
        </div >
    )
}

export default BlogList;
