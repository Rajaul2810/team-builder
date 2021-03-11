import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Detail.css';
import img1 from '../../Photo/male.png';
import img2 from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars,faPodcast,faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube,faTwitter } from '@fortawesome/free-brands-svg-icons'
import Logo from '../Logo/Logo';
const Detail = (props) => {
    const {idTeam} = useParams()
    const [detail, setDetail] = useState([]);
    const {strTeam,strGender,strCountry,intFormedYear,strYoutube,strTwitter,strDescriptionEN,strDescriptionES,strFacebook} = detail;
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setDetail(data.teams[0]));
    },[idTeam])
    const condition = detail.strGender;
    return (
        <div className="banner">
             <Logo detail ={detail}></Logo>
            <div className="all-detail">
                    
                <div className="detail">
                        <div className="info">
                                <h2>{strTeam}</h2>
                                <h5><FontAwesomeIcon icon={faPodcast} /> Founded : {intFormedYear}</h5>
                                <h5><FontAwesomeIcon icon={faGlobeEurope} /> Country: {strCountry}</h5>
                                <h5><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h5>
                        </div>
                     <div className="img-info">
                        {
                            condition === "Male" ? <img src={img1} alt=""/> : <img src={img2} alt=""/>
                        }
                     </div>
                </div>
                <div className="description">
                        <p>{strDescriptionEN}</p>
                        <p>{strDescriptionES}</p>
                </div>
                <div className="icon">
                    <a href={strFacebook}><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href={strYoutube}><span><FontAwesomeIcon icon={faYoutube} /></span></a>
                    <a href={strTwitter}><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
                
             </div>  
        </div>
        
    );
};

export default Detail;