import { NavLink } from 'react-router-dom'
import styles from "./styles.module.scss";

export function Aside() {
    return (
        <div className={styles.aside}>
          <NavLink to="/login" title="Login">
            <button>Início</button>
          </NavLink>
          <button>Serviços</button>
          <button>Configurações</button>
          <button>Sair</button>
        </div>
    )
}