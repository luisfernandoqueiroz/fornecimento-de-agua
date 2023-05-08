import { Aside } from "../../components/Aside";
import { Button } from "../../components/Button";

import imagemDePerfil from "../../assets/luis.jpeg";
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
      <div className={styles.userContent}>
        <img src={imagemDePerfil}/>
        <span>
          Boa noite, <strong>Luís Fernando Ramos Queiroz</strong><br/>
          Escolha uma opção abaixo para continuar
        </span>
      </div>

      <div className={styles.principalContent}>
        <Aside />

        <div className={styles.dashboard}>

          <Button type={'Clientes'} image={clientesImage}/>
          <Button type={'Faturas'} image={faturasImage}/>
          <Button type={'Leituras'} image={leiturasImage}/>
          <Button type={'Funcionários'} image={funcionariosImage}/>
          <Button type={'Entradas'} image={entradasImage}/>
          <Button type={'Saídas'} image={saidasImage}/>
          <Button type={'Hidrômetros'} image={hidrometrosImage}/>
          <Button type={'Associação'} image={associacaoImage}/>
        </div>
      </div>
    </div>
  )
}
