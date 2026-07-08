
const container = document.getElementById("cartbucket");


// async function demo() {
//     return "Hello"

// }

// demo()
// .then(data => console.log(data));


async function getProducts() {

    let response = await fetch("https://dummyjson.com/recipes");

    const data = await response.json();

    //console.log(data.carts);

    data.recipes.map((product) => {

        container.innerHTML += `
        
        <div class = "card">
        <img src ="${product.image}"/> 
        <div class="bg">

            <h2> ${product.name}</h2>
            <span class="btn"> ★★★★ ${product.rating} </span>
            </div>
        </div>

        `;

    });

}
getProducts();

