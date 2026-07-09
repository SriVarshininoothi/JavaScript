
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