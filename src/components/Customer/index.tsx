import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

export function Customer() {
    return (
        <NavLink to="/choose-customer/show-hydrometers" title="Hidrometros do cliente" style={{textDecoration: 'none'}} className={styles.navLink}>
            <span>01</span>
            <span>João Pereira da Silva</span>
            <span>123.456.789-00</span>
        </NavLink>
    )
}