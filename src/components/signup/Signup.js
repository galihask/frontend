import './signup.css';
import {useState} from "react";
import axios from 'axios'

import {BASE_URL, SIGN_UP_URL, TOKEN_URL} from "../../constants";



const Signup = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSumbit = async (event) => {
        event.preventDefault();
        console.log('Click on submit')
        if ((password && rePassword) && (password !== rePassword)) {
            alert('Passwords do not match')
            return;
        }

        const body = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName
        }

        const registerResult = await axios.post(`${BASE_URL}${SIGN_UP_URL}`, body)
        console.log(registerResult.data)
        if (registerResult.status === 201) {
            try {
                const tokenResult = await axios.post(`${BASE_URL}${TOKEN_URL}`, {
                    username: email,
                    password: password
                })
                console.log(tokenResult.data)
                window.localStorage.setItem('token', tokenResult.data.token)
                props.setIsLogged(true);
            } catch (error) {
                console.log(error)
                alert('Details incorrect')

            }

        } else {
            alert('Email already taken')
        }


    }


    return (
        <>
            <div className='signup-form'>
                <h1>Join us</h1>
                <form onSubmit={handleSumbit}>
                    <label htmlFor='email-input'>Email:</label>
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        id='email-input' type='email'/>

                    <label htmlFor='password-input'>Password:</label>
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        id='password-input' type='password'/>

                    <label htmlFor='repassword-input'>Re-enter password:</label>
                    <input
                        value={rePassword}
                        onChange={(event)=> setRePassword(event.target.value)}
                        id='repassword-input' type='password'/>

                    <label htmlFor='first-name-input'>First name:</label>
                    <input
                        value = {firstName}
                        onChange={(event)=> setFirstName(event.target.value)}

                        id='first-name-input' type='text'/>

                    <label htmlFor='last-name-input'>Last name:</label>
                    <input
                        value = {lastName}
                        onChange={(event)=> setLastName(event.target.value)}
                        id='last-name-input' type='text'/>


                    <input value='SIGN UP' type='submit'/>
                </form>
            </div>
        </>
    )
}

export default Signup