
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

//put

async function updateUser() {

    let user = {
        id: 1,
        name: "Srivarshini",
        email: "sri@gmail.com"
    };

    let response = await fetch("https://jsonplaceholder.typicode.com/users/1",

        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user) // convert into string 

        }
    );

    let data = await response.json(); // convert into object
    console.log(data);


}
updateUser();


//delete

async function deleteUser() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users/1",
        {
            method: "DELETE"
        }
    );

    console.log(response.status);
}
deleteUser();