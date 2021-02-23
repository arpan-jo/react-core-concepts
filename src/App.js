import logo from './logo.svg';
import './App.css';
import { findByLabelText } from '@testing-library/react';
import { useEffect, useState } from 'react';

function App() {
    const hero = ['Sallu', 'Shahruk', 'Akshay', 'Ranbir', 'Manna', 'Shuvo'];
    const products = [
        {
            name: 'Apple 13',
            price: '$250',
            details: 'This is first class Apple phone with new Apple chip',
        },
        {
            name: 'Samsung S21',
            price: '$200',
            details: 'Samsung: The next genaration phone',
        },
        {
            name: 'Macbook Pro',
            price: '$200',
            details: 'Samsung: The next genaration phone',
        },
        {
            name: 'Dell latitude',
            price: '$200',
            details: 'Samsung: The next genaration phone',
        },
    ];
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Counter></Counter>
                <Users></Users>
                <ul>
                    {hero.map(hero => (
                        <li>{hero}</li>
                    ))}
                </ul>
                {products.map(pd => (
                    <Product productmuidichi={pd}></Product>
                ))}
            </header>
        </div>
    );
}

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
    }, []);

    return (
        <div>
            <h3>Name: {users.length} </h3>
            <ol>
                {users.map(user => (
                    <li>{user.name}</li>
                ))}
            </ol>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3> Count: {count}</h3>
            <button
                onClick={() => {
                    if (count <= 0) {
                        return;
                    } else {
                        setCount(count - 1);
                    }
                }}
            >
                Decrease
            </button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

function Product(props) {
    const productStyle = {
        border: '2px solid red',
        height: '300px',
        width: '300px',
        borderRadius: '5px',
        backgroundColor: 'lightgrey',
        margin: '10px',
        color: 'green',
    };

    const { name, price, details } = props.productmuidichi;
    return (
        <div style={productStyle}>
            <h3>{name}</h3>
            <h1>{price}</h1>
            <p>{details}</p>
            <button>Buy now</button>
        </div>
    );
}

export default App;
