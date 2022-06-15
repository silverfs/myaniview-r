export async function GraphQL() {
     const api = await fetch(process.env.REACT_APP_ANILIST_URL, {method: 'POST'});
     const data = await api.json().catch(error => console.log(error));
     return data;
}