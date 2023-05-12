import { NavLink } from "react-router-dom";
import { CustomersData } from "./CustomersData";
import styles from "./styles.module.scss";
import { MagnifyingGlass } from "phosphor-react";


export function ShowCustomers() {


    return (
        <div className={styles.principalContent}>
            <div className={styles.tableContent}>
                <div className={styles.tableHeader}>
                    CLIENTES CADASTRADOS:
                    <NavLink to="/register-customer" title="Cadastrar cliente" style={{textDecoration: 'none'}}> 
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
                    <CustomersData />
                    <CustomersData />
                    <CustomersData />
                    <CustomersData />
                    <CustomersData />
                    <CustomersData />
                    <CustomersData />
                    <CustomersData />
                </div>
            </div>
        </div>
    )
}