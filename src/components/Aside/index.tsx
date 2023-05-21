import { NavLink } from 'react-router-dom'
import { UserCircle } from 'phosphor-react'
import styles from "./styles.module.scss";

export function Aside() {
    return (
        <div className={styles.aside}>
          <div className={styles.asideButtonsContent}>
            <span>
              <UserCircle size={50}/>
              João Pereira da Silva
            </span>
              <NavLink to="/home" title="home" className={styles.navLink}>
                <button>Início</button>
              </NavLink>
              <NavLink to="#" className={styles.navLink}>
                <button>Serviços</button>
              </NavLink>
              <NavLink to="#" className={styles.navLink}>
                <button>Configurações</button>
              </NavLink>
              <NavLink to="/login" className={styles.navLink}>
                <button className={styles.exitButton}>Sair</button>
              </NavLink>
          </div>
        </div>
    )
}