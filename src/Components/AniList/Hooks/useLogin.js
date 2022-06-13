import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../../context/AuthProvider';
import axios from '../../../api/axios';


const LOGIN_URL = '/auth/login';

export const useLogin = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({
                username: user,
                password: pwd
            }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    //withCredentials: true
                }
            );
            //const accessToken = response?.data?.accessToken;
            setAuth({ user, pwd/* , accessToken */ });
            // Clear components on submit
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if(!err?.response) {
                setErrMsg(`We got ignored by the server (no server response)! ${err}`);
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed :(')
            }
            errRef.current.focus();
        }
    }

    return {
        success,
        errRef,
        errMsg,
        handleSubmit,
        userRef,
        setUser,
        user,
        setPwd,
        pwd,
    }
}