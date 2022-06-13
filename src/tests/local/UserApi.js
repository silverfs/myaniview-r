export async function UserApi() {
     const api = await fetch(process.env.REACT_APP_REST_API_URL + '/users');
     const data = await api.json().catch(error => console.log(error));
     return data;
}

export async function UserLoginApi() {
    const api = await fetch(process.env.REACT_APP_REST_API_URL + '/auth/login');
    const data = await api.json().catch(error => console.log(error));
    return data;
}