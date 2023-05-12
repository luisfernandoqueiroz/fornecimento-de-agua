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
          <NavLink to="/show-customers" title="Mostrar clientes" style={{textDecoration: 'none'}}> 
            <Button type={'Clientes'} image={clientesImage}/>
          </NavLink>
          <Button type={'Faturas'} image={faturasImage}/>
          <Button type={'Leituras'} image={leiturasImage}/>
          <Button type={'Funcionários'} image={funcionariosImage}/>
          <Button type={'Entradas'} image={entradasImage}/>
          <Button type={'Saídas'} image={saidasImage}/>
          <Button type={'Hidrômetros'} image={hidrometrosImage}/>
          <Button type={'Associação'} image={associacaoImage}/>
        </div>
    </div>
  )
}
