import '../styles/formulario.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validarCPF } from '../scripts/valida-cpf.js';
import { MascaraParaData, validarData } from '../scripts/valida-data.js';

const Formulario = () => {
    // Refere-se ao valor digitado no campo
    const [cpf, setCpf] = useState(''); // SetCpf atualiza o valor de cpf
    // Refere-se ao resultado da validação (true/false/null)
    const [validoCpf, setValidoCpf] = useState(null);
    const [dataNascimento, setNascimento] = useState(''); // SetNascimento atualiza o valor de dataNascimento
    const [validoNascimento, setValidoNascimento] = useState(null);
    const navigate = useNavigate();

    const handleChangeCPF = (e) => { // 'e' representa o objeto de evento para os event handlers
        setCpf(e.target.value); // Valor atual do input
    };

    const handleChangeNascimento = (e) => {
        const inputValue = e.target.value;
        const dataComMascara = MascaraParaData(inputValue);
        setNascimento(dataComMascara);
    };

    const handleSubmit = (e) => {
        // Previnindo recarregamento da página
        e.preventDefault();

        // Validações
        const cpfValido = validarCPF(cpf);
        const dataValida = validarData(dataNascimento);
        
        setValidoCpf(cpfValido);
        setValidoNascimento(dataValida);

        // Se todas as validações estiverem como True, navega-se para a próxima tela de cadastro
        if (cpfValido && dataValida) {
            navigate('/foto');
        }
    };

    return (
        <section id="main" className='flex-col'>
            <h1 className='page_title'>Crie sua conta!</h1>

            <form onSubmit={handleSubmit} className='formulario_cadastro' data-formulario>
                <div>
                    <fieldset className="formulario_campo">
                        <label className="campo_etiqueta" htmlFor="nome">Nome</label>
                        <input name="nome" id="nome" className="campo_escrita" />

                    </fieldset>

                    <fieldset className="formulario_campo">
                        <label className="campo_etiqueta" htmlFor="email">E-mail</label>
                        <input name="email" id="email" className="campo_escrita" />

                    </fieldset>
                    <fieldset className="formulario_campo">
                        <label className="campo_etiqueta" htmlFor="cpf">CPF (apenas números)*</label>
                        <input name="cpf" id="cpf" className="campo_escrita campo_escrita--menor" value={cpf} onChange={handleChangeCPF} required />
                        {validoCpf === false &&
                            <p className='text-red-600 font-medium pt-2 text-sm'>CPF inválido</p>
                        }
                    </fieldset>
                    <fieldset className="formulario_campo">
                        <label className="campo_etiqueta" htmlFor="aniversario">Data de nascimento</label>
                        <input name="aniversario" id="aniversario" className="campo_escrita campo_escrita--menor" maxLength="10" value={dataNascimento} onChange={handleChangeNascimento} required />
                        {validoNascimento === false &&
                            <p className='text-red-600 font-medium pt-2 text-sm'>Data inválida</p>
                        }
                    </fieldset>
                    <fieldset className="formulario_termos">
                        <input type='checkbox' name="termos" className="termos_input" required /> {/* e.target.checked */}
                        <p className="termos_texto">Li e estou ciente quanto às condições de tratamento dos meus dados conforme
                            descrito na PolíticadePrivacidade do banco.</p>

                    </fieldset>
                </div>

                <div>
                    <button type='submit' className="btn-avancar">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                        </svg>
                        <div className="text">
                            <div className="formulario_botao" id="enviar" data-botao-enviar>
                                Avançar
                            </div>
                        </div>
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Formulario