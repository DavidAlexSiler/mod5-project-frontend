import queryString from 'query-string';

export async function getUser(){
    let parsed = queryString.parse(window.location.search)
    const r = await fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parsed)
    });
    return await r.json();
}

// export function getSong(){
//     fetch()
// }



