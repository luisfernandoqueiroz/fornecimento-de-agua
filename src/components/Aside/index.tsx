import { NavLink } from 'react-router-dom'
import styles from "./styles.module.scss";

export function Aside() {
    return (
        <div className={styles.aside}>
          <span>João Pereira da Silva</span>
          <div className={styles.asideButtons}>
            <NavLink to="/login" title="Login">
              <button>Início</button>
            </NavLink>
            <button>Serviços</button>
            <button>Configurações</button>
            <button>Sair</button>
          </div>
        </div>
    )
}