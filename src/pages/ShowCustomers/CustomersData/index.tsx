import styles from "./styles.module.scss";
import { PencilSimple } from 'phosphor-react';

export function CustomersData() {
    return (
        <div className={styles.principalContent}>
            <span>01</span>
            <span>João Pereira da Silva</span>
            <span>123.456.789-00</span>
            <span>48912345678</span>
            <span>
                <PencilSimple size={24} weight="bold"/>
            </span>
        </div>
    )
}