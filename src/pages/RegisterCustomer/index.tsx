import { Aside } from "../../components/Aside";
import styles from "./styles.module.scss";

export function RegisterCustomer() {
    return(
        <div className={styles.principalContent}>
            <Aside />

            <form action="submit" id="customerForm">
                <h2>CADASTRAR NOVO CLIENTE</h2>
                <div className={styles.fieldsets}>
                    <fieldset className={styles.dataFieldset}>
                        <legend>Dados</legend>
                        <label htmlFor="name">
                            Nome:
                            <input type="text" id="name" required/>
                        </label>
                        <label htmlFor="cpf">
                            CPF:
                            <input type="text" id="cpf" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" required/>
                        </label>
                        <label htmlFor="phone">
                            Telefone:
                            <input type="tel" pattern="[0-9]{11}" required/>
                        </label>
                        <label htmlFor="email">
                            Gmail:
                            <input type="email" pattern=".+@gmail\.com" id="email" required/>
                        </label>

                        <div className={styles.associateCustomerLabels}>
                            <span>O cliente é associado?</span>
                            <label htmlFor="yes">
                                <input type="radio" name="associate" id="yes" required/>
                                Sim
                            </label>
                            <label htmlFor="not">
                                <input type="radio" name="associate" id="not" required/>
                                Não
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className={styles.addressFieldset}>
                        <legend>Endereço</legend>
                        <label htmlFor="address">
                            Cidade:
                            <input type="text" id="address" required/>
                        </label>
                        <label htmlFor="uf">
                            Unidade Federativa:
                            <input type="text" id="uf" maxLength={2} minLength={2} required/>
                        </label>
                        <label htmlFor="addressNumber">
                            Número do endereço:
                            <input type="text" id="addressNumber" maxLength={4} pattern="[0-9]+" required/>
                        </label>
                        <label htmlFor="community">
                            Comunidade:
                            <input type="text" id="community"/>
                        </label>
                    </fieldset>
                </div>
                <button type="submit" form="customerForm">
                    Cadastrar
                </button>
            </form>
        </div>
    )
}