import React from 'react';
import '../Css/client.css'
const Client = (props) => {
    const { clients } = props;
    return (
        <div className='client'>
            <h1>Liste des clients </h1>
            {clients.map((client) => (
                <div>
                    <p>Nom: {client.nom}; Prenom: {client.prenom}; Adresse: {client.adresse};Telephone: {client.nom} ; Paiement: {client.paiement}</p>
                </div>

            ))};

        </div>

    );
};

export default Client;