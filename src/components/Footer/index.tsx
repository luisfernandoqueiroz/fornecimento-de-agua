import styles from "./styles.module.scss";

export function Footer() {
    return(
        <footer className={styles.footer}>
            <span>
                Endereço: comunidade Campos Gerais, s/n | Bairro: Zona Rural<br/>
                Cidade: Luislândia - MG | CEP: 39336-000 | Email: associacaocamposgerais@gmail.com<br/>
                CNPJ: 21.357.801/0001-89 | Data de fundação: 13/05/1983
            </span>
      </footer>
    )
}