import { Aside } from "../../components/Aside";
import { CustomersData } from "./CustomersData";
import styles from "./styles.module.scss";

export function ShowCustomers() {
    return (
        <div className={styles.principalContent}>
            <Aside />
            <div className={styles.tableContent}>
                <div className={styles.tableHeader}>
                    CLIENTES CADASTRADOS:
                    <button>Cadastrar cliente</button>
                </div>
                <div className={styles.dataContent}>
                    <span>NOME</span>
                    <span>CPF</span>
                    <span>TELEFONE</span>
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