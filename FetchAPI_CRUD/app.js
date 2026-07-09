
//Get(read)

async function getUsers() {

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();

        console.log(users);

    } catch (error) {
        console.log(error);
    }
}

getUsers();




//post

async function createUser() {

    let user = {
        name: "Shinchan",
        email: "shinchan@gmail.com"
    };

    let response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user) //server accept in string 
        }

    );

    let data = await response.json();

    console.log(data);

}

createUser();
