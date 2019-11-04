import queryString from 'query-string';

export const appUrl = "https://shocking-witch-74494.herokuapp.com/api/v1/"
// export const appUrl= "http://localhost:3000/api/v1/"


export function getUser(){
    let parsed = queryString.parse(window.location.search)
    return fetch(`${appUrl}users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parsed)
    })
    .then(r => r.json());
}







