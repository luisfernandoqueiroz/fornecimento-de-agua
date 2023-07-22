import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CustomersData } from "../../components/CustomerData";
import { MagnifyingGlass } from "phosphor-react";

import styles from "./styles.module.scss";


interface CustomerItem {
    id_cliente: string;
    nome_completo: string;
    cpf: string;
    telefone: string;
}

export function ShowCustomers() {
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
                    CLIENTES CADASTRADOS:
                    <NavLink to="/home/show-customers/register-customer" title="Cadastrar cliente" style={{textDecoration: 'none'}}> 
                        <button>Cadastrar cliente</button>
                    </NavLink>
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
                    <span>TELEFONE</span>
                    <span></span>
                </div>
                <div className={styles.customersData}>
                    {customers.map(customer => (
                        <CustomersData
                            key={customer.id_cliente}
                            id={customer.id_cliente}
                            name={customer.nome_completo}
                            cpf={customer.cpf}
                            phone={customer.telefone}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}