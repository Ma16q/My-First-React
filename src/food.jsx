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
            <img width="300" height="200" src="https://media.newyorker.com/photos/691dfdbf1aed7ca2b3ec0a4d/4:3/w_2560,h_1920,c_limit/FOOD-SCENE---im-donut---MischelleMoy.jpg" alt="Donut" />
        </div>
    );
}

export default Food;