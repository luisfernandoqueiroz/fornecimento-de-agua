// import { initializeApp } from 'firebase/app';
import {} from 'firebase/auth';

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import styles from "./styles.module.scss";

// const firebaseConfig = {
//     apiKey: "AIzaSyBkEc8fcGv-B3hvQSloSCkmR79r-b1moFY",
//     authDomain: "fornecimento-de-agua.firebaseapp.com",
//     projectId: "fornecimento-de-agua",
//     storageBucket: "fornecimento-de-agua.appspot.com",
//     messagingSenderId: "515817442575",
//     appId: "1:515817442575:web:59527aa30da7d9f02a027a",
//     measurementId: "G-EW3X31WGYQ"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


export function Login() {
    return (
        <div className={styles.principalContent}>
            <Header />
            <div className={styles.formContent}>
                <form action="">
                    <h2>FAÇA LOGIN</h2>

                    <label htmlFor="emailInput">
                        EMAIL
                        <input type="email" id="emailInput"/>
                    </label>
                    

                    <label htmlFor="passwordInput">
                        SENHA
                    <input type="password" id="passwordInput"/>
                    </label>
                   

                    <button type="button">
                        Entrar
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}