import './App.css'

const App = () => {

    const MyButton = () => (
        <button> I'm a Button </button>
    );

    const user = {
        name: 'John',
        age: 20,
        imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSizes: [100, 200, 300]
    };

    const { name, age, imageURL } = user;

    const profile = () => (
        <div>
            <h1> Name: {name}</h1>
            <p> Age: {age}</p>
            <img src={imageURL} alt="user" />
        </div>
    );

    const products = [
        { title: 'Apples', price: 100 },
        { title: 'Pears', price: 200 },
        { title: 'Bananas', price: 300 },
    ];

    const listedProducts = products.map(product => (
        <li key={product.price}>
            {product.title} - ${product.price}
        </li>
    ));

    return (
        <div>
            <h1>Welcome to my webpage</h1>
            My Button: <MyButton />
            {profile()}
            <div>
                <ul>
                    {listedProducts}
                </ul>
            </div>
        </div>
    );
}

export default App;