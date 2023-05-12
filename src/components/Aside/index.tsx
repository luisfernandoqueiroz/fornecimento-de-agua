import { NavLink } from 'react-router-dom'
import { UserCircle } from 'phosphor-react'
import styles from "./styles.module.scss";

export function Aside() {
    return (
        <div className={styles.aside}>
          <span>
            <UserCircle size={50}/>
            João Pereira da Silva
          </span>
          <div className={styles.asideButtonsContent}>
            <div className={styles.asideButtons}>
                <NavLink to="/login" title="Login">
                  <button>Início</button>
                </NavLink>
                <button>Serviços</button>
                <button>Configurações</button>
            </div>
            <button className={styles.exitButton}>Sair</button>
          </div>
        </div>
    )
}