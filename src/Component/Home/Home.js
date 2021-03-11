import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
const Home = () => {
    const [team,setTeam] = useState([]);
    const handleBtn = (id) =>{
         setTeam(id)
    }
    useEffect(()=>{
          fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
          .then(res => res.json())
          .then(data => setTeam(data.teams));
    },[])
    return (
         <div className="home">
              {
                 team.map(team => <Team handleBtn={handleBtn} team ={team}></Team>)
             }
         </div>
    );
};

export default Home;