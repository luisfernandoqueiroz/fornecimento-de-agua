import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./styles.module.scss";

interface CustomerProps {
    associado: boolean;
    cidade_uf: string;
    comunidade: string;
    cpf: string;
    gmail: string;
    id_cliente: string;
    n_casa: string;
    nome_completo: string;
    telefone: string;
}

export function EditCustomer() {
    const { id } = useParams();
    
    const [customer, setCustomer] = useState<CustomerProps>({
        associado: false,
        cidade_uf: "",
        comunidade: "",
        cpf: "",
        gmail: "",
        id_cliente: "",
        n_casa: "",
        nome_completo: "",
        telefone: "",
      });

    useEffect(() => {
        fetch(`http://localhost/backend/return.cliente.by.id.php?id=${id}`)
          .then(response => response.json())
          .then(data => {
            setCustomer(data);
            console.log(data)
          })
          .catch(error => {
            console.error(error);
          });
    }, [id]);

    return(
        <div className={styles.principalContent}>
            <form action="submit" id="customerForm">
                <h2>EDITAR INFORMAÇÕES DO CLIENTE: {customer.nome_completo}</h2>
                <div className={styles.fieldsets}>
                    <fieldset className={styles.dataFieldset}>
                        <legend>Dados</legend>
                        <label htmlFor="name">
                            Nome:
                            <input type="text" id="name" placeholder={customer.nome_completo}/>
                        </label>
                        <label htmlFor="cpf">
                            CPF:
                            <input type="text" id="cpf" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" placeholder={customer.cpf}/>
                        </label>
                        <label htmlFor="phone" >
                            Telefone:
                            <input type="tel" pattern="[0-9]{11}" placeholder={customer.telefone}/>
                        </label>
                        <label htmlFor="email">
                            Gmail:
                            <input type="email" pattern=".+@gmail\.com" id="email" placeholder={customer.gmail}/>
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
                            <input type="text" id="address" placeholder={customer.cidade_uf}/>
                        </label>
                        <label htmlFor="addressNumber">
                            Número do endereço:
                            <input type="text" id="addressNumber" maxLength={10} placeholder={customer.n_casa}/>
                        </label>
                        <label htmlFor="community">
                            Comunidade:
                            <input type="text" id="community" placeholder={customer.comunidade}/>
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