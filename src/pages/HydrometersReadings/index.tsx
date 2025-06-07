import styles from "./styles.module.scss";
import leiturasImage from "../../assets/leituras.svg"
import { X, Check } from 'phosphor-react'

export function HydrometersReadings() {
  return(
    <div className={styles.mainContainer}>
      <h2>LEITURAS DE HIDRÔMETROS</h2>

      <div className={styles.contentWrapper}>
        <img src={leiturasImage} alt="Leituras" />

        <div className={styles.buttons}>
          <button>Informar Leituras</button>
          <button>Consultar Leituras</button>
        </div>

        <div className={styles.readingsInformation}>
          <div>
            <Check size={80} color="rgb(40, 145, 77)" weight="bold"/>    
            <span>10</span>
            <p>Leituras Feitas</p>
          </div>

          <div className={styles.pendingReadings}>
            <X size={80} color="rgb(219, 124, 0)" weight="bold"/>
            <span>40</span>
            <p>Leituras a fazer</p>
          </div>
        </div>
      </div>
    </div>
  )
}