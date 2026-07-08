
const container = document.getElementById("cartbucket");


// async function demo() {
//     return "Hello"

// }

// demo()
// .then(data => console.log(data));


async function getProducts() {

    let response = await fetch("https://dummyjson.com/products");

    const data = await response.json();

    //console.log(data.carts);

    data.products.map((product) => {

        container.innerHTML += `
        
        <div class = "card">

        <h2> ${product.title}</h2>
        <img src ="${product.thumbnail}"/> 
        <button class="btn">${product.price}</button>

        </div>
        
        
        `;

    });

}
getProducts();

