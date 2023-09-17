import React from 'react';
import Login from "@/app/components/Login/Login";
import styles from './login.layout.module.css';

function LoginLayout() {
    return (
        <div className={styles.container}>
            <div className={styles.round}>
                <div className={styles.innerround}>
                    <div className={styles.nestedinnerround}>

                    </div>
                </div>
            </div>
            <div className={styles.login}>
                <Login/>
            </div>
            <div className={styles.backgroundimage}>
                <img src="./assets/background.svg" alt="background"/>
            </div>
        </div>
    );
}

export default LoginLayout;