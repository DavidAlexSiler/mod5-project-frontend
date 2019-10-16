import queryString from 'query-string';

export function getUser(){
    let parsed = queryString.parse(window.location.search)
    return fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parsed)

    })
        .then(r => r.json())
}




