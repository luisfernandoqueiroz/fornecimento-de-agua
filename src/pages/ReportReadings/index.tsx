import { ReadingInformation } from "../../components/ReadingInformation";
import styles from "./styles.module.scss";

export function ReportReadings() {
  return(
    <form className={styles.mainContainer}>
      <div className={styles.formHeader}>
        <div className={styles.header}>
          <h2>INFORMAR LEITURAS</h2>
          <p>Leiturista: José Carlos de Almeida - 01</p>
        </div>

        <div className={styles.formContainer}>
          <div>
            <label htmlFor="reading-date">Data da Leitura:</label>
            <input type="text" id="reading-date" placeholder="10/05/2025" required />
          </div>

          <div>
            <label htmlFor="reference-month">Mês de Referencia:</label>
            <input type="text" id="reference-month" placeholder="Abril 2025" required />
          </div>

          <div>
            <label htmlFor="observations">Observações:</label>
            <input type="text" id="observations" placeholder="Não há" />
          </div>
        </div>
      </div>

      <div className={styles.readingsContainer}>
        <div className={styles.readingsList}>
          <ReadingInformation />
          <ReadingInformation />
        </div>

        <button type="submit">
          Salvar Leitura
        </button>
      </div>
    </form>
  )
}