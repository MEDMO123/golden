import React from 'react';
import '../Css/Service.css'

const Service = () => {
    return (
        <div>
            <div className='menu'>

                <p>Découvrez un large gamme de  Services présentés  par notre agence pour répondre à vos besoins !</p>
            </div>

            <div className="service">
                <h2>Restauration</h2>
                <p>Nous disposons de salles pouvant accueillir plusieurs personnes pour vos differents acitivités ou cérémonies</p>
                <ul>
                    <li>Séminaires</li>
                    <li>Réunions</li>
                    <li>Conférences</li>
                    <li>Mariage</li>
                    <li>Anniversaire</li>
                </ul>

                <h2>Traiteur</h2>
                <p>Faites confiance à notre équipe de traiteurs professionnels  pour assurer la gestion de vos cérémonies !</p>
                <ul>
                    <li>Séminaires</li>
                    <li>Réunions</li>
                    <li>Conférences</li>
                    <li>Mariage</li>
                    <li>Anniversaire</li>
                </ul>
                <h2>Livraison</h2>

                <p>Notre service de livraion est disponible 7/7 pour toutes Vos commandes en ligne ou par Téléphone .<br />
                    Votre commande vous sera livrée en un temps record et vos premières livraisons vous coûterons 0 Franc !
                </p>


            </div>
        </div>
    );
};

export default Service;