import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./styles.module.scss";

interface EmployeeProps {
    associado: boolean;
    cidade_uf: string;
    comunidade: string;
    cpf: string;
    gmail: string;
    id_funcionario: string;
    n_casa: string;
    nome_completo: string;
    telefone: string;
}

export function EditEmployee() {
    const { id } = useParams();
    
    const [employee, setEmployee] = useState<EmployeeProps>({
        associado: false,
        cidade_uf: "",
        comunidade: "",
        cpf: "",
        gmail: "",
        id_funcionario: "",
        n_casa: "",
        nome_completo: "",
        telefone: "",
      });

    useEffect(() => {
        fetch(`http://localhost/backend/return.employee.by.id.php?id=${id}`)
          .then(response => response.json())
          .then(data => {
            setEmployee(data);
            console.log(data)
          })
          .catch(error => {
            console.error(error);
          });
    }, [id]);

    return(
        <div className={styles.principalContent}>
            <form action="submit" id="employeeForm">
                <h2>EDITAR INFORMAÇÕES DO FUNCIONÁRIO: {employee.nome_completo}</h2>
                <div className={styles.fieldsets}>
                    <fieldset className={styles.dataFieldset}>
                        <legend>Dados</legend>
                        <label htmlFor="name">
                            Nome:
                            <input type="text" id="name" placeholder={employee.nome_completo}/>
                        </label>
                        <label htmlFor="cpf">
                            CPF:
                            <input type="text" id="cpf" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" placeholder={employee.cpf}/>
                        </label>
                        <label htmlFor="phone" >
                            Telefone:
                            <input type="tel" pattern="[0-9]{11}" placeholder={employee.telefone}/>
                        </label>
                        <label htmlFor="email">
                            Gmail:
                            <input type="email" pattern=".+@gmail\.com" id="email" placeholder={employee.gmail}/>
                        </label>

                        <div className={styles.associateEmployeeLabels}>
                            <span>O funcionário é associado?</span>
                            <label htmlFor="yes">
                                <input type="radio" name="associate" id="yes" />
                                Sim
                            </label>
                            <label htmlFor="not">
                                <input type="radio" name="associate" id="not" />
                                Não
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className={styles.addressFieldset}>
                        <legend>Endereço</legend>
                        <label htmlFor="address">
                            Cidade/UF:
                            <input type="text" id="address" placeholder={employee.cidade_uf}/>
                        </label>
                        <label htmlFor="addressNumber">
                            Número do endereço:
                            <input type="text" id="addressNumber" maxLength={10} placeholder={employee.n_casa}/>
                        </label>
                        <label htmlFor="community">
                            Comunidade:
                            <input type="text" id="community" placeholder={employee.comunidade}/>
                        </label>
                    </fieldset>
                </div>
                <button type="submit" form="employeeForm">
                    Salvar
                </button>
            </form>
        </div>
    )
}