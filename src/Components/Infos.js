import React from 'react';
import '../Css/info.css'
const Infos = () => {
    return (
        <div className='info'>
            <div className="contact">
                <h2>Contacter nous:</h2>
                <ul>
                    <li><span><img src="mail.jpg" alt="icon" /></span>goldenfood@gmail.com</li>
                    <li><img src="telephone.jpg" alt="icon" /> 77 666 33 99</li>
                    <li><img src="wsp.jpg" alt="icon" />77 654 78 90 </li>
                </ul>
            </div>

            <div className="local">
                <h2>Rendez nous visite:</h2>
                <ul>
                    <li><img src="localisation.jpg" alt="icon" />SCatt Urbam</li>
                    <li><img src="localisation.jpg" alt="icon" /> Ouest foire</li>
                    <li><img src="horloge.jpg" alt="icon" /> 7/7 de 8h-22h</li>
                </ul>
            </div>

            <div className="appli">
                <h2>Télécharger notre application:</h2>
                <ul>
                    <li><li><img src="playstore.jpg" alt="icon" /> Playstore</li>
                        <li><img src="appstore.jpg" alt="icon" /> Appstore</li></li>

                </ul>

            </div>

            <div className="paie">
                <h2>Regler vos factures:</h2>
                <ul>
                    <li><img src="om.jpg" alt="icon" /> </li>
                    <li><img src="wave.jpg" alt="icon" /></li>
                </ul>
            </div>



        </div>
    );
};

export default Infos;