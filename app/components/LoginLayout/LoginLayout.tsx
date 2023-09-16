import React from 'react';
import Login from "@/app/components/Login/Login";
import styles from './login.layout.module.css';

function LoginLayout() {
    return (
        <div className={styles.container}>
            <div className={styles.round}>
                <div className="inner-round">
                    <div className="nested-inner-round">

                    </div>
                </div>
            </div>
            <div className={styles.login}>
                <Login/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="865" height="720" viewBox="0 0 865 720" fill="none">
                <path
                    d="M257.5 139C121.9 151.8 29.6667 51 0.5 -1L864.5 2.5V720.5H768C469.2 682.5 519.5 531 582 460C618.5 410.167 684.5 290.1 656.5 208.5C621.5 106.5 427 123 257.5 139Z"
                    fill="#264ECA"/>
            </svg>
        </div>
    );
}

export default LoginLayout;