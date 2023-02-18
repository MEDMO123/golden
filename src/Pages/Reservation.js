import React, { useState } from 'react';
import '../index.css'
import '../Css/Reservation.css'
const Reservation = (props) => {
    const [reservation, setReservation] = useState({
        nom: '',
        prenom: '',
        adresse: '',
        tel: '',
        mail: '',
        date: '',
        nbplace: ''
    });
    const { handleaddreservation } = props;

    function handleonSubmit(evt) {
        evt.preventDefault();
        handleaddreservation(reservation);
        setReservation({
            nom: '',
            prenom: '',
            adresse: '',
            tel: '',
            mail: '',
            date: '',
            nbplace: ''
        });
    }
    function handleChange(evt) {
        const { name, value } = evt.target;
        setReservation({ ...reservation, [name]: value });
    }
    return (
        <div>

            <div className="formulaire">
                <fieldset>
                    <form onSubmit={(evt) => (handleonSubmit(evt))} >
                        <label htmlFor="nom" id="nom" >Nom</label><br />
                        <input type="text" name="nom" id="nom" value={reservation.nom} onChange={(evt) => handleChange(evt)} /><br />
                        <label htmlFor="prenom" id="prenom" >Prénom</label><br />
                        <input type="text" name="prenom" id="prenom" value={reservation.prenom} onChange={(evt) => (handleChange(evt))} /><br />
                        <label htmlFor="adresse" id="adresse" >Adresse</label><br />
                        <input type="text" name="adresse" id="Adresse" value={reservation.adresse} onChange={(evt) => (handleChange(evt))} /><br />
                        <label htmlFor="tel" id="tel" >Téléphone</label><br />
                        <input type="number" name="tel" id="tel" value={reservation.tel} onChange={(evt) => (handleChange(evt))} /><br />
                        <label htmlFor="date" id="date" >Date</label><br />
                        <input type="date" name="date" id="date" value={reservation.date} onChange={(evt) => (handleChange(evt))} /><br />
                        <label htmlFor="nbplace" id="nbplace"  >Nombre de place</label><br />
                        <input type="number" name="nbplace" id="nbplace" value={reservation.nbplace} onChange={(evt) => (handleChange(evt))} /><br /><br />

                        <input className='button' type="submit" value='Valider la réservation' />
                    </form>
                </fieldset>
            </div>

        </div>
    );
};

export default Reservation;