export async function fetchData(route ='', data ={}, methodType) {
    const response = await fetch(`http://localhost:5000${route}`, data, {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if(response.ok) {
        return await response.json();
    } else {
        throw await response.json();
    };
}

export function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}

export function setPost(post) {
    localStorage.setItem('post', JSON.stringify(post))
}

export function getPosts() {
    return JSON.parse(localStorage.getItem('post'))
}