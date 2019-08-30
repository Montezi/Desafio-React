import React, { useState, useEffect } from 'react';

import './New.css';

import api from '../services/api';

export default function New({ history, match }) {
  const userId = match.params.id;

  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [street, setStreet] = useState([]);
  const [suite, setSuite] = useState([]);
  const [city, setCity] = useState([]);
  const [zipcode, setZipcode] = useState([]);
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`users/${userId}`);
      setId(response.data.id);
      setName(response.data.name);
      setEmail(response.data.email);
      setStreet(response.data.address.street);
      setSuite(response.data.address.suite);
      setCity(response.data.address.city);
      setZipcode(response.data.address.zipcode);
      setPhone(response.data.phone);
    }
    loadUser();
  }, [userId]);

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('/users', {
      id,
      name,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
      },
      phone,
    });

    history.push('/');
  }
  return (
    <div className="new-container">
      <form onSubmit={handleSubmit}>
        <div className="titulo">Cadastro de Usuário:</div>
        <input
          placeholder="Informe o Id"
          value={id}
          onChange={e => setId(e.target.value)}
        />
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
