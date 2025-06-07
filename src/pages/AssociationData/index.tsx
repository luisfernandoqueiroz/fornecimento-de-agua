import styles from "./styles.module.scss";

export function AssociationData() {
  return(
    <div className={styles.principalContent}>
      <form action="submit" id="associationDataForm">
        <h2>DADOS DA ASSOCIAÇÃO</h2>
          <fieldset className={styles.dataFieldset}>
            <legend>ASSOCIAÇÃO COMUNITÁRIA DOS PEQUENOS<br /> PRODUTORES RURAIS DE CAMPOS GERAIS</legend>
            <div className={styles.dataForm}>
              <div>
                <label htmlFor="name">
                    <span>Nome:</span>
                    <input type="text" id="name" required placeholder="Associação Comunitária dos Pequenos Produtores Rurais de Campos Gerais"/>
                </label>
              </div>

              <div>
                <label htmlFor="cnpj">
                    <span>CNPJ:</span>
                    <input type="text" id="cnpj" pattern="[0-9]{2}\.[0-9]{3}\.[0-9]{3}/[0-9]{4}-[0-9]{2}" required placeholder="21.357.801/0001-89"/>
                </label>
                <label htmlFor="foundationDate">
                   <span>DATA DE FUNDAÇÃO:</span>
                    <input type="text" pattern="\d{2}/\d{2}/\d{4}" id="foundationDate" required placeholder="04/05/1983"/>
                </label>
              </div>

              <div>
                <label htmlFor="neighborhood">
                    <span>BAIRRO:</span>
                    <input type="text" id="neighborhood" required placeholder="Zona Rural"/>
                </label>
                <label htmlFor="city">
                    <span>CIDADE:</span>
                    <input type="text" id="city" required placeholder="Luislândia - MG"/>
                </label>
              </div>

              <div>
                <label htmlFor="postalCode">
                    <span>CEP:</span>
                    <input type="text" id="postalCode" pattern="^\d{5}-\d{3}$" required placeholder="39.336-000"/>
                </label>
                <label htmlFor="email">
                    <span>GMAIL:</span>
                    <input type="email" pattern=".+@gmail\.com" id="email" required placeholder="associacaocamposgerais@gmail.com"/>
                </label>
              </div>
              
              <div>
                <label htmlFor="community">
                    <span>COMUNIDADE:</span>
                    <input type="text" id="community" required placeholder="Campos Gerais"/>
                </label>
                <label htmlFor="currentPresident">
                    <span>PRESIDENTE ATUAL:</span>
                    <input type="text" id="currentPresident" required placeholder="Claudineide Ferreira de Menezes"/>
                </label>
              </div>
            </div>

            <div className={styles.buttons}>
              <button type="button" className={styles.alterButton}>
                  Alterar
              </button>

              <button type="submit" form="associationDataForm">
                  Salvar
              </button>
            </div>
          </fieldset>
      </form>
    </div>
  )
}