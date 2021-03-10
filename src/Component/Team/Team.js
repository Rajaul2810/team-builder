import React from 'react';
import  Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css';
import { Link } from 'react-router-dom';
const Team = (props) => {
   const {strTeam, strTeamLogo,strCountry,strLeague,idTeam} = props.team;
    return (
        <div className="team-container">
             <img src={strTeamLogo} alt=""/>  
             <p>Name: <h3>{strTeam}</h3></p> 
             <p>Country: <h3>{strCountry}</h3></p> 
             <p>League: <h3>{strLeague}</h3></p> 
             <Link to={`/detail/${idTeam}`}><Button onClick={()=>props.handleBtn(idTeam)} >Detail <FontAwesomeIcon icon={faArrowRight}/></Button></Link>
            
        </div>
       
    );
};

export default Team;