import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logImg from '../../assets/logo.svg';

import './styles.css';
import api from '../../services/api';

export default function NewIncident() {
    const history = new useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value        
        }
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: localStorage.getItem('ongId')
                }
            });
            history.push('/profile');
        } catch(error) {
            alert(error);
        }
    }
    return(
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo Caso</h1>
                    <p>Faça seu cadastro</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>
                </section>
                
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do Caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)}/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}