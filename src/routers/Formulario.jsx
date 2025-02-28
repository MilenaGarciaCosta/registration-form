import { Link } from 'react-router-dom';
import '../styles/formulario.css'
import React, { useState } from 'react';

const Formulario = () => {

    return (
        <section id="main" className='flex-col'>
            <h1 className='page_title'>Crie sua conta!</h1>

            <form className='formulario_cadastro' data-formulario>
                <div>
                    <fieldset className="formulario_campo">
                        <label className="campo_etiqueta" htmlFor="nome">Nome</label>
                        <input name="nome" id="nome" className="campo_escrita" />
                        <span className="mensagem-erro"></span>
                    </fieldset>

                    <fieldset className="formulario_campo">
                        <label className="campo_etiqueta" htmlFor="email">E-mail</label>
                        <input name="email" id="email" className="campo_escrita" />
                        <span className="mensagem-erro"></span>
                    </fieldset>
                    <fieldset className="formulario_campo">
                        <label className="campo_etiqueta" htmlFor="cpf">CPF (apenas números)*</label>
                        <input name="cpf" id="cpf" className="campo_escrita campo_escrita--menor" required />
                        <span className="mensagem-erro"></span>
                    </fieldset>
                    <fieldset className="formulario_campo">
                        <label className="campo_etiqueta" htmlFor="aniversario">Data de nascimento</label>
                        <input name="aniversario" id="aniversario" className="campo_escrita campo_escrita--menor" required />
                        <span className="mensagem-erro"></span>
                    </fieldset>
                    <fieldset className="formulario_termos">
                        <input type='checkbox' name="termos" className="termos_input" required />
                        <p className="termos_texto">Li e estou ciente quanto às condições de tratamento dos meus dados conforme
                            descrito na PolíticadePrivacidade do banco.</p>
                        <span className="mensagem-erro"></span>
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
                    <span className="mensagem-erro"></span>
                </div>
            </form>
        </section>
    )
}

export default Formulario