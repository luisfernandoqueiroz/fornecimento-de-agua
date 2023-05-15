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
          <NavLink to="/show-customers" title="Mostrar clientes" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Clientes'} image={clientesImage}/>
          </NavLink>
          <NavLink to="#" title="Mostrar clientes" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Faturas'} image={faturasImage}/>
          </NavLink>
          <NavLink to="#" title="Mostrar clientes" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Leituras'} image={leiturasImage}/>
          </NavLink>
          <NavLink to="#" title="Mostrar clientes" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Funcionários'} image={funcionariosImage}/>
          </NavLink>
          <NavLink to="#" title="Mostrar clientes" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Entradas'} image={entradasImage}/>
          </NavLink>
          <NavLink to="#" title="Mostrar clientes" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Saídas'} image={saidasImage}/>
          </NavLink>
          <NavLink to="/choose-customer" title="Ver hidrômetros" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Hidrômetros'} image={hidrometrosImage}/>
          </NavLink>
          <NavLink to="#" title="Mostrar clientes" style={{textDecoration: 'none'}} className={styles.navLink}> 
            <Button type={'Associação'} image={associacaoImage}/>
          </NavLink>
        </div>
    </div>
  )
}
