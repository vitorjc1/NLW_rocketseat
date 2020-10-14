import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {

    var conexoes = 0;

    const [totalConnections, setTotalConnections] = useState(0);

    api.get('/connections').then(result => {
        setTotalConnections(result.data.total);
         conexoes = result.data.total;
    })  
    
    return (
    
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImg}
                 className="hero-image" alt="Plataforma de estudos"/>
           
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {conexoes} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>

    )
}

export default Landing;