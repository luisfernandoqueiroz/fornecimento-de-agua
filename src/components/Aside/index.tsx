import styles from "./styles.module.scss";

export function Aside() {
    return (
        <div className={styles.aside}>
          <button>Início</button>
          <button>Serviços</button>
          <button>Configurações</button>
          <button>Sair</button>
        </div>
    )
}