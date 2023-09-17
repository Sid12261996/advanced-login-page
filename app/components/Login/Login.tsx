'use client'
import React, {ChangeEvent, useState} from 'react';
import styles from './login.module.css';
import {LOGIN_CREDENTIALS} from "@/lib/constants/loginConstants";

function Login() {
    const [formValues, setFormValues] = useState({ username: '', password: ''});
    const LOGIN_SUCCESS: string = 'success';

    function onLogin() {
        const validatedMessage : string = validateAndGetErrorMessage(formValues.username, formValues.password);
        if (validatedMessage === LOGIN_SUCCESS) {
            console.log(' route to blank route')
            return;
        }
        window.alert(validatedMessage);
    }

    function validateAndGetErrorMessage(username: string, password: string): string {
        if (username === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password) return LOGIN_SUCCESS;
        if (!username || !password) return "username or password is empty";
        if (username === LOGIN_CREDENTIALS.username) return "password is incorrect";
        if (username === LOGIN_CREDENTIALS.password) return "username is incorrect";
        return "Username and password are incorrect";
    }

    function setFormValuesFromEvent(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src="./assets/Group.svg" alt="cart"/>
            </div>
            <div className={styles.inputContainer}>
                <input type="text" placeholder="USERNAME" name="username"
                       onChange={(event) => setFormValuesFromEvent(event)}/>
            </div>
            <div className={styles.inputContainer}>
                <input type="password" placeholder="PASSWORD" name="password"
                       onChange={(event) => setFormValuesFromEvent(event)}/>
            </div>
            <div className={styles.inputContainer}>
                <button onClick={() => onLogin()}>LOGIN</button>
            </div>
            <p>Forgot Password?</p>
        </div>
    );
}

export default Login;