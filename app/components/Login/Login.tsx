'use client'
import React, {ChangeEvent, useState} from 'react';
import styles from './login.module.css';
import {LOGIN_CREDENTIALS} from "@/lib/constants/loginConstants";
import {useRouter} from "next/navigation";

function Login() {
    const [formValues, setFormValues] = useState({username: '', password: ''});
    const router = useRouter();
    const LOGIN_SUCCESS: string = 'success';
    const regex = `^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?])[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]+$`

    function validatePassword(password: string): boolean {
        const regexExp = new RegExp(regex);
        return regexExp.test(password);
    }

    function onLogin() {
        const validatedMessage: string = validateAndGetErrorMessage(formValues.username, formValues.password);
        if (validatedMessage === LOGIN_SUCCESS) {
            console.log(' route to pages route');
            router.push('/blank');
            return;
        }
        window.alert(validatedMessage);
    }

    function validateAndGetErrorMessage(username: string, password: string): string {
        if (username === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password) return LOGIN_SUCCESS;
        if (!username || !password) return "the provided username or password is empty";
        if (username === LOGIN_CREDENTIALS.username) return "the provided password is wrong";
        if (password === LOGIN_CREDENTIALS.password) return "the provided username is wrong";
        return "the provided password and username are wrong";
    }

    function setFormValuesFromEvent(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <img src="./assets/Group.svg" alt="cart"/>
            </div>
            <div className={styles.inputcontainer}>
                <img src="./assets/user.svg" alt="user"/>
                <input type="text" placeholder="USERNAME" name="username"
                       onChange={(event) => setFormValuesFromEvent(event)}/>
            </div>
            <div className={styles.inputcontainer}>
                <img src="./assets/lock.svg" alt="user"/>
                <input type="password" placeholder="PASSWORD" name="password"
                       onChange={(event) => setFormValuesFromEvent(event)}/>

            </div>
            {/*{validatePassword(formValues['password']) && <span className={styles.errormsg}>Wrong Combination</span>}*/}
            <span className={styles.errormsg}>Wrong Combination</span>
            <div className={styles.button}>
                <button onClick={() => onLogin()}>LOGIN</button>
            </div>
            <p>Forgot Password?</p>
        </div>
    );
}

export default Login;