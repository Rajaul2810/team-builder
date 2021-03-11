import React from 'react';
import './Logo.css';
const Logo = (props) => {
    const {strTeamBanner,strTeamLogo} = props.detail;

    return (
        <div className="banner-img">
            <div className="banner-pic">
            <img src={strTeamBanner} alt=""/>
                <div className="logo-pic">
                    <img src={strTeamLogo} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Logo;