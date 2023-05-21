import styles from './styles.module.scss';

import logoAssociacao from '../../assets/logoAssociacao.svg';
import { InvoiceReading } from '../../components/InvoiceReading';

export function Invoice() {

    return (
      <div className={styles.principalContent}>
        <header className={styles.header}>
            <img src={logoAssociacao}/>
            <div>
                <h1>SISTEMA DE FORNECIMENTO DE ÁGUA DA ASSOCIAÇÃO COMUNITÁRIA DOS PEQUENOS PRODUTORES RURAIS DE CAMPOS GERAIS</h1>
                <span>ENDEREÇO: COMUNIDADE CAMPOS GERAIS, S/N - BAIRRO: ZONA RURAL</span>
                <span>CIDADE: LUISLÂNDIA - MG | CEP: 39336-000</span>
                <span>EMAIL: <u>associacaocamposgerais@gmail.com</u> - CNPJ: 21.357.801/0001-89 | DATA DE FUNDAÇÃO: 12/05/1983</span>
            </div>
        </header>
        
        <InvoiceReading />

        <section className={styles.calcContainer}>
            <h2>Cálculo</h2>
            <div>
                <p>
                    <strong>Primeiro passo se calcula o consumo em m3 do cliente, essa formula é usada igualmente para todos  os clientes usuários d'água:</strong><br/>
                    (Consumo em M3 = leitura atual - leitura anterior)
                </p>
                <br/>
                <p>
                    <strong>Segundo passo, analise se o cliente é associado, se sim, segue a condição que seja verdadeira abaixo:</strong><br/>
                    1- Se o consumo for menor que 6.000m3, o valor da fatura será = R$12,00<br/>
                    2- Se o consumo for igual ou maior que 6.000m3 e menor que 30.000m3, o valor da fatura será de: Consumom3 * 2,00 (dois reais)<br/> 
                    3- Se o consumo for igual ou maior que 6.000m3 e maior que 30.000m3, o valor da fatura será de: Consumom3 * 2,00 (dois reais) + taxa adicional de R$10,00 (dez reais) por exceder do limite em m3 imposto no regimento interno da água.              
                </p>
                <br/>
                <p>
                    <strong>Terceiro passo, analise se o cliente é associado, se não, segue a condição que seja verdadeira abaixo:</strong><br/>
                    1- Se o consumo for menor que 6.000m3, o valor da fatura será = R$15,00<br/>
                    2- Se o consumo for igual ou maior que 6.000m3 e menor que 30.000m3, o valor da fatura será de: Consumom3 * 2,40 (dois reais e quarenta centavos)<br/>
                    3- Se o consumo for igual ou maior que 6.000m3 e maior que 30.000m3, o valor da fatura será de: Consumom3 * 2,40 (dois reais e quarenta centavos) + taxa adicional de R$10,00 (dez reais) por exceder do limite em m3 imposto no regimento interno da água.
                </p>
                <br/>
                <p>Caso haja alguma discordância ou irregularidade em sua conta, entre em contato conosco.</p>
                <p>Atenciosamente,</p>
                <br/>
                <p><strong>Comissão do Sistema de Fornecimento de água da Associação comunitária dos Pequenos produtores Rurais de Campos Gerais</strong></p>
            </div>
        </section>

        <section className={styles.autenticationContainer}>
            <h2>Autenticação</h2>
            <div>
                <strong>Data de pagamento: ___/___/______</strong>
                <span>Vilma Rodrigues de Matos<br/>Tesoureiro(a)</span>
            </div>
        </section>
        --------------------------------------------------------------------------------------------------------------------------------------
        <InvoiceReading />
        <strong className={styles.paymentDate}>Data de pagamento: ___/___/______</strong>
      </div>
    );
}