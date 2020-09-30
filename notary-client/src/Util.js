let API_ADDRESS = 'https://notarius-api.herokuapp.com/api/register';

function getAddress(path) {
    //return 'https://notarius-api.herokuapp.com' + path;
    return 'http://localhost:8080' + path;
}


function register(info) {
    fetch(getAddress('/api/register'), {
        method: 'POST',
        body: JSON.stringify(Object.assign({
            "role": "CLIENT"
        }, info))
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
            auth();
        })
        .catch(data => {
            console.log(data);
        });
}

function auth() {
    console.log(" before")
    let formData = new FormData();
    formData.append('username', 'user');
    formData.append('password', 'user');

    fetch(getAddress('/login'), {
        method: 'POST',
        "Content-Type": "multipart/form-data;boundary='",
        body: formData,
        credentials: "include"
    })
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
        .catch(data => {
            console.log(data);
        });
    console.log(" after")
}

export default {auth, register, getAddress};