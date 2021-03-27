import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Introduction to Angular', body: 'There are many variations of slightly believable.', author: 'Mark Twain', id: 1 },
        { title: 'Introduction to React', body: 'There are many variations of slightly believable.', author: 'Richard Bradson', id: 2 },
        { title: 'Rxjs - Powerful tool', body: 'There are many variations of slightly believable.', author: 'Tom Cruise', id: 3 },
        { title: 'Introduction Javascript', body: 'There are many variations of slightly believable.', author: 'Mark Twain', id: 4 },
        { title: 'Introduction to React Native', body: 'There are many variations of slightly believable.', author: 'Richard Bradson', id: 5 },
        { title: 'Introduction to Webpack', body: 'There are many variations of slightly believable.', author: 'Tom Cruise', id: 6 },
        { title: 'Introduction to Swift', body: 'There are many variations of slightly believable.', author: 'Mark Twain', id: 7 },
        { title: 'Introduction to Typescript', body: 'There are many variations of slightly believable.', author: 'Richard Bradson', id: 8 },
        { title: 'Git - Powerful tool for version control', body: 'There are many variations of slightly believable.', author: 'Tom Cruise', id: 9 }
    ]);

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} deleteBlog={deleteBlog}></BlogList>
        </div>
    );
}

export default Home;
