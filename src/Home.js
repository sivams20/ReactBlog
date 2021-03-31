import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data, error } = useFetch('https://run.mocky.io/v3/69378cb7-4a9e-4b51-b01c-4c8d66aa3a11');

    return (
        <div className="home">
            { error && <div>{error}</div>}
            { data && <BlogList blogs={data}></BlogList>}
        </div>
    );
}

export default Home;
