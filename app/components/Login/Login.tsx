import React from 'react';
import styles from './login.module.css';

function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src="./assets/Group.svg" alt="cart"/>
            </div>
            <div className={styles.inputContainer}>
                <input type="text" placeholder="USERNAME"/>
            </div>
            <div className={styles.inputContainer}>
                <input type="password" placeholder="PASSWORD"/>
            </div>
            <div className={styles.inputContainer}>
                <button>LOGIN</button>
            </div>
<p>Forgot Password?</p>
        </div>
    );
}

export default Login;