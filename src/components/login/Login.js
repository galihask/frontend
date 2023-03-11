import {useState} from "react";
import axios from "axios";
import {BASE_URL, TOKEN_URL} from "../../constants";

const Login = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const emailChangeHandler = (event) => {
        setEmail(
            event.target.value
        )
    }

    const passwordChangeHandler = (event) => {
        setPassword(
            event.target.value
        )
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const tokenResult = await axios.post(`${BASE_URL}${TOKEN_URL}`, {
                username: email,
                password
            },
                {
                    headers: {
                        'Access-Control-Allow-Origin':'*'
                    }
                })
            if (tokenResult.status === 200) {
                const token = tokenResult.data.token;
                window.localStorage.setItem('token', token)
                props.setIsLogged(true)
            }


        } catch (error) {
            console.log(error)
        }
        setPassword('')
        setEmail('')
    }

    return (
        <>
            <div className='signup-form'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='email-input'>Email:</label>
                    <input
                        value={email}
                        onChange={emailChangeHandler}
                        id='email-input' type='email'/>

                    <label htmlFor='password-input'>Password:</label>
                    <input
                        value={password}
                        onChange={passwordChangeHandler}
                        id='password-input' type='password'/>

                    <input value='Login' type='submit'/>
                </form>
            </div>
        </>
    )
}

export default Login