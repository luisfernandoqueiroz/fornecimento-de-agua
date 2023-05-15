import styles from "./styles.module.scss";

export function EditCustomer() {

    return(
        <div className={styles.principalContent}>
            <form action="submit" id="customerForm">
                <h2>EDITAR INFORMAÇÕES DO CLIENTE: José Pereira da Silva</h2>
                <div className={styles.fieldsets}>
                    <fieldset className={styles.dataFieldset}>
                        <legend>Dados</legend>
                        <label htmlFor="name">
                            Nome:
                            <input type="text" id="name" placeholder="José Pereira da Silva"/>
                        </label>
                        <label htmlFor="cpf">
                            CPF:
                            <input type="text" id="cpf" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" placeholder="123.456.789-00"/>
                        </label>
                        <label htmlFor="phone" >
                            Telefone:
                            <input type="tel" pattern="[0-9]{11}" placeholder="12345678900"/>
                        </label>
                        <label htmlFor="email">
                            Gmail:
                            <input type="email" pattern=".+@gmail\.com" id="email" placeholder="jose@gmail.com"/>
                        </label>

                        <div className={styles.associateCustomerLabels}>
                            <span>O cliente é associado?</span>
                            <label htmlFor="yes">
                                <input type="radio" name="associate" id="yes" />
                                Sim
                            </label>
                            <label htmlFor="not">
                                <input type="radio" name="associate" id="not" />
                                Não
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className={styles.addressFieldset}>
                        <legend>Endereço</legend>
                        <label htmlFor="address">
                            Cidade/UF:
                            <input type="text" id="address" placeholder="Cidade do Jose/AB"/>
                        </label>
                        <label htmlFor="addressNumber">
                            Número do endereço:
                            <input type="text" id="addressNumber" maxLength={10} placeholder="123"/>
                        </label>
                        <label htmlFor="community">
                            Comunidade:
                            <input type="text" id="community" placeholder="Comunidade do jose"/>
                        </label>
                    </fieldset>
                </div>
                <button type="submit" form="customerForm">
                    Salvar
                </button>
            </form>
        </div>
    )
}