import { useState, useEffect } from 'react';

export const useUserUpdate = () => {
    const LOGIN_URL = `${process.env.REACT_APP_REST_API_URL}/users/1`;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [anilistname, setAnilistname] = useState('');

    useEffect(() => {
        getUser();
    })
    function getUser() {
        fetch(LOGIN_URL).then((result) => {
            result.json().then((resp) => {
                setUsername(resp.username)
                setPassword(resp.password)
                setAnilistname(resp.anilistname)
            })
        })
    }
    function setUpdateUser() {
        let item = {username, password, anilistname}
        fetch(LOGIN_URL, {
            method: 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                getUser()
                window.location.reload();
            })
        })
    }

    return {
        setUsername,
        setPassword,
        setAnilistname,
        username,
        password,
        anilistname,
        setUpdateUser
    }
}