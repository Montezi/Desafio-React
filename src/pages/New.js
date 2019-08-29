import React, { useState } from 'react';

import './New.css';

import api from '../services/api';
// import { Container } from './styles';

export default function New({ history }) {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [street, setStreet] = useState([]);
  const [suite, setSuite] = useState([]);
  const [city, setCity] = useState([]);
  const [zipcode, setZipcode] = useState([]);
  const [phone, setPhone] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('/users', {
      name,
      email,
      // adress: {
      street,
      suite,
      city,
      zipcode,
      // },
      phone,
    });

    history.push('/');
  }
  return (
    <div className="new-container">
      <form onSubmit={handleSubmit}>
        <div className="titulo">Cadastro de Usuário:</div>
        <input
          placeholder="Informe o seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          placeholder="Informe o seu email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          placeholder="Informe o seu endereço"
          value={street}
          onChange={e => setStreet(e.target.value)}
        />

        <input
          placeholder="Informe o Complemento"
          value={suite}
          onChange={e => setSuite(e.target.value)}
        />

        <input
          placeholder="Informe a sua Cidade"
          value={city}
          onChange={e => setCity(e.target.value)}
        />

        <input
          placeholder="Informe o seu CEP"
          value={zipcode}
          onChange={e => setZipcode(e.target.value)}
        />

        <input
          placeholder="Informe o seu Telefone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
