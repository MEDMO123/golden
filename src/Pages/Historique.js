import React from 'react';
import '../index.css'
import '../Css/historique.css'

const Historique = (props) => {
    const { reservations } = props;
    return (

        <div className='historique'>
            <h1>Liste des réservations</h1>
            {reservations.map((reservation) => (
                <div>
                    <p> Nom:{reservation.nom}; Prenom:{reservation.prenom}; Adresse:{reservation.adresse};Telephone{reservation.tel} ; Date:{reservation.date} ; Nombre de place:{reservation.nbplace}
                    </p>
                </div>
            ))};
        </div>


    );
};
export default Historique;