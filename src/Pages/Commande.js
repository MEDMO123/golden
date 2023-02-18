import React, { useState } from 'react';
import '../Css/commande.css'
import { NavLink } from 'react-router-dom';


const Commande = () => {



    const [damier, setDamier] = useState('');
    const [canelle, setCanelle] = useState('');
    const [cake, setCake] = useState('');
    const [margarita, setMargarita] = useState('');
    const [tacos, setTacos] = useState('');
    const [reine, setReine] = useState('');
    const [grillade, setGrillade] = useState('');
    const [beignet, setBeignet] = useState('');
    const [frommage, setFrommage] = useState('');
    const [jambon, setJambon] = useState('');





    function ajouterdamier() {
        const damier = 'gateau damier 3 500 F';
        setDamier(damier);

    }
    function ajoutercanelle() {
        const canelle = 'gateau à la canelle: 6 000 F';
        setCanelle(canelle);
    }
    function ajoutercake() {
        const cake = 'Gateau au chocolat : 2 500 F';
        setCake(cake);
    }
    function ajoutermargarita() {
        const margarita = 'Pizza margarita: 4 500 F';
        setMargarita(margarita);
    }
    function ajoutertacos() {
        const tacos = 'Tacos   : 2 000 F';
        setTacos(tacos);
    }
    function ajouterreine() {
        const reine = 'Pizza reine   : 5 000 F';
        setReine(reine);
    }
    function ajoutergrillade() {
        const grillade = 'Grillade    : 5 000 F';
        setGrillade(grillade);
    }
    function ajouterbeignet() {
        const beignet = 'Beignet à la crème   : 2 500 F';
        setBeignet(beignet);
    }
    function ajouterfrommage() {
        const frommage = 'Pizza au frommage   : 3 500 F';
        setFrommage(frommage);
    }
    function ajouterjambon() {
        const jambon = ' Beignet au Jambon   : 2 000 F';
        setJambon(jambon);
    }


    function vider() {
        setCake('');
        setCanelle('');
        setDamier('');
        setReine('');
        setMargarita('');
        setFrommage('');
        setJambon('');
        setTacos('');
        setBeignet('');
        setGrillade('');

    }
    const produits = [
        <>
            <div className="produit">
                <img src="IMG-20220611-WA0004.jpg" alt="patisserie" />
                <p >Gateau damier <br />3 500 F <br />
                    <button id='btnachat' onClick={ajouterdamier} >Acheter</button> </p></div>
            <div className="produit"> <img src="IMG-20220611-WA0003.png" alt="patisserie" />
                <p >Gateau à la canelle <br />6 000 F <br /><button id='btnachat' onClick={ajoutercanelle} >Acheter</button> </p></div>
            <div className="produit"> <img src="IMG-20220628-WA0014.jpg" alt="patisserie" />
                <p >Gateau au chocolat <br />2 500 F <br /><button id='btnachat' onClick={ajoutercake} >Acheter</button> </p></div>
            <div className="produit"> <img src="z1.jpg" alt="patisserie" />
                <p >Pizza margarita <br />4 500 F <br /><button id='btnachat' onClick={ajoutermargarita}>Acheter</button> </p></div>
            <div className="produit"> <img src="r5.jpg" alt="patisserie" />
                <p >Tacos <br />2 000 F <br /><button id='btnachat' onClick={ajoutertacos}>Acheter</button> </p></div>
            <div className="produit"> <img src="z2.jpg" alt="patisserie" />
                <p >Pizza reine <br />5 000 F <br /><button id='btnachat' onClick={ajouterreine} >Acheter</button> </p></div>
            <div className="produit"> <img src="r3.jpg" alt="patisserie" />
                <p >Grillade  <br />5 000 F <br /><button id='btnachat' onClick={ajoutergrillade} >Acheter</button> </p></div>
            <div className="produit"> <img src="IMG-20220603-WA0037.jpg" alt="patisserie" />
                <p >Beignet à la crème  <br />2 500 F <br /><button id='btnachat' onClick={ajouterbeignet}>Acheter</button> </p></div>
            <div className="produit"> <img src="z3.jpg" alt="patisserie" />
                <p > Pizza au  frommage <br />3 500 F <br /><button id='btnachat' onClick={ajouterfrommage}>Acheter</button> </p></div>
            <div className="produit"> <img src="IMG-20220622-WA0034.jpg" alt="patisserie" />
                <p >Beignet au jambon  <br />2 000 F <br /><button id='btnachat' onClick={ajouterjambon}>Acheter</button> </p></div>
        </>
    ]

    return (

        <div className='cmd'>




            <div className='panier'>
                <button id='btnvider' onClick={vider} >Vider le panier</button><br /><br />

                <h1>Panier      <span><img src="panier.jpg" alt="panier" /></span></h1><br />

                <p>{damier} </p>
                <p>{canelle} </p>
                <p>{cake} </p>
                <p>{margarita} </p>
                <p>{tacos} </p>
                <p>{reine} </p>
                <p>{grillade} </p>
                <p>{beignet} </p>
                <p>{frommage} </p>
                <p>{jambon} </p><br /><br /><br />


                <NavLink to='/authentification'>Valider  </NavLink>

            </div>

            <div className='produit'>
                {produits.map((produit) =>
                    <li>   {produit} </li>
                )};


            </div>
        </div>

    );
};

export default Commande;