import styles from "./styles.module.scss";

export function Login() {
    return (
        <div className={styles.formContent}>
            <form action="">
                <h2>FAÇA LOGIN</h2>

                <label htmlFor="emailInput">
                    EMAIL:
                    <input type="email" id="emailInput"/>
                </label>
                

                <label htmlFor="passwordInput">
                    SENHA:
                <input type="password" id="passwordInput"/>
                </label>
                

                <button type="button">
                    Entrar
                </button>
            </form>
        </div>
    )
}