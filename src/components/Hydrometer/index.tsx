import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";
import { PencilSimple } from "phosphor-react";

export function Hydrometer() {
    return (
        <div className={styles.principalContent}>
            <span>1234567890</span>
            <span>1234</span>
            <span>01/02/2023</span>
            <span>Casa</span>
            <span>Sim</span>
            <NavLink to="/choose-customer/show-hydrometers/edit-hydrometer" title="Ver hidrômetros" style={{textDecoration: 'none'}}> 
                <button>
                    <PencilSimple size={24} weight="bold"/>
                </button>
            </NavLink>
        </div>
    )
}