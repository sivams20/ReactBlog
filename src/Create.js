import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('daniel');
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        history.push('/');
    }
    return (
        <div className="create">
            <h1>Add New Blog</h1>
            <form onSubmit={onSubmit}>
                <label>Blog Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Blog Body:</label>
                <input type="textarea" value={body} onChange={(e) => setBody(e.target.value)} required />
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="daniel">Daniel</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;