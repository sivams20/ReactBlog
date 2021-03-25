import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('sivam');
    const [age, setAge] = useState(30);

    const handleClick = () => {
        setName('Balu');
        setAge(33);
    }

    return (
        <div className="Home">
            <h1>Homepage</h1>
            <p>{name} is {age} year old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;
