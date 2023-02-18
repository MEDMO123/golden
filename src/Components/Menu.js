import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/Menu.css'


const Menu = () => {
    return (
        <div className='navigation'>

            <ul>
                <li > <NavLink to='/' className={({ isActive }) => (isActive ? "link" : undefined)} >Commande</NavLink > </li>
                <li> <NavLink to='/service' className={({ isActive }) => (isActive ? "link " : undefined)}>Services</NavLink ></li>
                <li> <NavLink to='/reservation' className={({ isActive }) => (isActive ? "link" : undefined)}>Réservation</NavLink ></li>
                <li><NavLink to='/Historique' className={({ isActive }) => (isActive ? "link" : undefined)}>Historique</NavLink ></li>
                <li><NavLink to='/client' className={({ isActive }) => (isActive ? "link" : undefined)}>Liste clients</NavLink ></li>



            </ul>

            <h2> Au Carrefour des bonnes saveurs !</h2>
        </div>
    );
};

export default Menu;