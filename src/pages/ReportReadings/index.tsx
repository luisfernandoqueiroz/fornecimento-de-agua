import { useState } from "react";
import { ModalConfirmation } from "../../components/ModalConfirmation";
import { ReadingInformation } from "../../components/ReadingInformation";
import styles from "./styles.module.scss";
import { SuccessModal } from "../../components/SuccessModal";
import { ErrorModal } from "../../components/ErrorModal";

export function ReportReadings() {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmationOpen(true);
  };

  const handleConfirm = () => {
    setIsConfirmationOpen(false);
    // Simulação de envio - substitua pela sua lógica real
    const isSuccess = Math.random() > 0.3; // 70% chance de sucesso para teste
    
    if (isSuccess) {
      setIsSuccessOpen(true);
    } else {
      setIsErrorOpen(true);
    }
  };

  const handleRetry = () => {
    setIsErrorOpen(false);
    setIsConfirmationOpen(true);
  };

  const closeAllModals = () => {
    setIsConfirmationOpen(false);
    setIsSuccessOpen(false);
    setIsErrorOpen(false);
  };
  return(
    <>
      <form className={styles.mainContainer} onSubmit={handleSubmit}>
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
            <ReadingInformation />
            <ReadingInformation />
            <ReadingInformation />
            <ReadingInformation />
            <ReadingInformation />
            <ReadingInformation />
          </div>

          <button type="submit">
            Salvar Leitura
          </button>
        </div>
      </form>

      <ModalConfirmation 
        isOpen={isConfirmationOpen}
        onClose={closeAllModals}
        onConfirm={handleConfirm}
      />

      <SuccessModal 
        isOpen={isSuccessOpen}
        onClose={closeAllModals}
      />

      <ErrorModal 
        isOpen={isErrorOpen}
        onClose={closeAllModals}
        onRetry={handleRetry}
      />
    </>
  )
}