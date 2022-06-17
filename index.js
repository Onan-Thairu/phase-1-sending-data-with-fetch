function submitData(username, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        return document.querySelector('body').innerHTML = `<p>${data.id}</p>`
    })
    .catch(error => {
        return document.querySelector('body').innerHTML = `<p>${error.message}</p>`
    })
}