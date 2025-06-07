import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button";

import clientesImage from "../../assets/clientes.svg"
import faturasImage from "../../assets/faturas.svg"
import leiturasImage from "../../assets/leituras.svg"
import funcionariosImage from "../../assets/funcionarios.svg"
import entradasImage from "../../assets/entradas.svg"
import saidasImage from "../../assets/saidas.svg"
import hidrometrosImage from "../../assets/hidrometro.svg"
import associacaoImage from "../../assets/logoAssociacao.svg"

import styles from "./styles.module.scss";


export function Home() {

  return (
    <div className={styles.contentWrapper}>
        <div className={styles.dashboard}>
          <NavLink to="/home/show-customers" title="Mostrar clientes" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Clientes'} image={clientesImage}/>
          </NavLink>
          <NavLink to="/home/invoice" title="Mostrar faturas" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Faturas'} image={faturasImage}/>
          </NavLink>
          <NavLink to="/home/hydrometers-readings" title="Mostrar leituras" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Leituras'} image={leiturasImage}/>
          </NavLink>
          <NavLink to="#" title="Mostrar funcionários" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Funcionários'} image={funcionariosImage}/>
          </NavLink>
          <NavLink to="#" title="Mostrar entradas" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Entradas'} image={entradasImage}/>
          </NavLink>
          <NavLink to="#" title="Mostrar saídas" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Saídas'} image={saidasImage}/>
          </NavLink>
          <NavLink to="/home/choose-customer" title="Ver hidrômetros" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Hidrômetros'} image={hidrometrosImage}/>
          </NavLink>
          <NavLink to="/home/association-data" title="Mostrar associação" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Associação'} image={associacaoImage}/>
          </NavLink>
        </div>
    </div>
  )
}
