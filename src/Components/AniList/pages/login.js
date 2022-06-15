import { React } from 'react'
import { useLogin } from '../Hooks/useLogin';

export default function Login() {
    const { errRef, errMsg, handleSubmit, userRef, setUser, user, setPwd, pwd } = useLogin();
    //console.log(user, errMsg, errRef, success, pwd);

    return (
        <>
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>errMsg</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        ref={userRef}
                        autoComplete='off'
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Sign In</button>
                </form>
                <p>
                    Forgot your password? <b>Too bad</b>.
                </p>
            </section>
        </>
    )
}