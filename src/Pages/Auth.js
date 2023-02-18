import React, { useState } from 'react';
import '../Css/authentification.css'

const Auth = (props) => {
    const [client, setClient] = useState({
        nom: '',
        prenom: '',
        adresse: '',
        telephone: '',
        paiement: ''
    });
    const { handleaddclient } = props;

    function handleonSubmit(evt) {
        evt.preventDefault();
        handleaddclient(client);
        setClient({
            nom: '',
            prenom: '',
            adresse: '',
            telephone: '',
            paiement: ''
        });
    };
    function handleChange(evt) {
        const { name, value } = evt.target;
        setClient({ ...client, [name]: value });
    };



    return (
        <div className='authentification'>

            <h1>Nous avons besoin de quelques informations dans le formulaire ci-dessous:</h1>
            <fieldset>
                <form onSubmit={(evt) => (handleonSubmit(evt))} >
                    <label htmlFor="nom" id="nom" >Nom</label><br />
                    <input type="text" name="nom" id="nom" value={client.nom} onChange={(evt) => handleChange(evt)} /><br />
                    <label htmlFor="prenom" id="prenom" >Prénom</label><br />
                    <input type="text" name="prenom" id="prenom" value={client.prenom} onChange={(evt) => (handleChange(evt))} /><br />
                    <label htmlFor="adresse" id="adresse" >Adresse</label><br />
                    <input type="text" name="adresse" id="Adresse" value={client.adresse} onChange={(evt) => handleChange(evt)} /><br />
                    <label htmlFor="tel" id="tel" >Téléphone</label><br />
                    <input type="number" name="telephone" id="telephone" value={client.telephone} onChange={(evt) => handleChange(evt)} /><br />
                    <label htmlFor="paiement" id="paiment" >Choisir le mode de paiement</label><br />
                    <select name="paiment" id="paiement" value={client.paiement} onChange={(evt) => handleChange(evt)} >
                        <option value="cash">Paiement à la livraison</option>
                        <option value="om">Orange money</option>
                        <option value="wave">Wave</option>
                    </select>


                    <input className='button' type="submit" value='Finaliser la commande ' />
                </form>
            </fieldset>
        </div>
    );
};

export default Auth;
