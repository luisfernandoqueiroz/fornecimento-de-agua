import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { MagnifyingGlass } from "phosphor-react";
import { Hydrometer } from "../../components/Hydrometer";
import styles from "./styles.module.scss";

interface HydrometerItem {
    name: string;
}

export function ShowHydrometers() {
    const [hydrometers, setHydrometers] = useState<HydrometerItem[]>([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost/backend/return.hidrometros.php?id=${id}`)
          .then(response => response.json())
          .then(data => {
            setHydrometers(data);
            console.log(data)
          })
          .catch(error => {
            console.error(error);
          });
    }, [id]);

    return (
        <div className={styles.principalContent}>
            <div className={styles.tableContent}>
                <div className={styles.tableHeader}>
                    HIDRÔMETROS CADASTRADOS:
                    <NavLink to="/home/choose-customer/show-hydrometers/register-hydrometer" title="Cadastrar hidrômetro" style={{textDecoration: 'none'}}> 
                        <button>Cadastrar hidrômetro</button>
                    </NavLink>
                </div>
                <div className={styles.searchCustomer}>
                    <input type="text" placeholder="Pesquise um hidrômetro por seu ID"/>
                    <button>
                        <MagnifyingGlass weight="bold" size={26}/>
                    </button>
                </div>
                <div className={styles.dataContent}>
                    <span>ID</span>
                    <span>PRIMEIRA LEITURA</span>
                    <span>DATA</span>
                    <span>LOCAL</span>
                    <span>ATIVO</span>
                    <span></span>
                </div>
                <div className={styles.customersData}>
                    <Hydrometer />
                    <Hydrometer />
                    <Hydrometer />
                </div>
            </div>
        </div>
    )
}