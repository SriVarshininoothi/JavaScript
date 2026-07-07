
const container = document.getElementById("productbucket");


fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {

        container.innerHTML = data.products.map(product => `


            <div class="card">

            <h3> ${product.title} </h3>
            <img src =" ${product.thumbnail}" />
            <button class = "btn"> ${product.price}</button>
        
            
            </div>
            

            
            `).join("")
        
    });

    const bg = document.getElementById("");

