import { MagnifyingGlass } from "phosphor-react";

import { Customer } from "../../components/Customer";

import styles from "./styles.module.scss";

export function ChooseCustomer() {
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
                    <Customer />
                    <Customer />
                </div>
            </div>
        </div>
    )
}