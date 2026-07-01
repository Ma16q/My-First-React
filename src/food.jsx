function Food() {
const foodItems = ['Pizza', 'Burger', 'Pasta', 'Salad'];

    return (
        <div>
            <h2>Food Items</h2>
            <ul>
                {foodItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <img width="300" height="200" src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="Donut" />
        </div>
    );
}

export default Food;