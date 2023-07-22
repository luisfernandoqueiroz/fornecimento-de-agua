import { useEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

import { Customer } from "../../components/Customer";
import styles from "./styles.module.scss";

interface CustomerItem {
    id_cliente: string;
    nome_completo: string;
    cpf: string;
}


export function ChooseCustomer() {
    const [customers, setCustomers] = useState<CustomerItem[]>([]);

    useEffect(() => {
        fetch('http://localhost/backend/return.clientes.php')
          .then(response => response.json())
          .then(data => {
            setCustomers(data);
          })
          .catch(error => {
            console.error(error);
          });
    }, []);

    return (
        <div className={styles.principalContent}>
            <div className={styles.tableContent}>
                <div className={styles.tableHeader}>
                    ESCOLHA UM CLIENTE:
                </div>
                <div className={styles.searchCustomer}>
                    <input type="text" placeholder="Pesquise um cliente por seu nome, ID ou CPF"/>
                    <button>
                        <MagnifyingGlass weight="bold" size={26}/>
                    </button>
                </div>
                <div className={styles.dataContent}>
                    <span>ID</span>
                    <span>NOME</span>
                    <span>CPF</span>
                </div>
                <div className={styles.customersData}>
                    {customers.map(customer => (
                        <Customer
                            key={customer.id_cliente}
                            id={customer.id_cliente}
                            name={customer.nome_completo}
                            cpf={customer.cpf}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}