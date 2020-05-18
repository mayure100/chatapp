import React from 'react'

import '../infoBar/infoBar.css'
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'
const InfoBar = ({ room }) => {

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online image" />
                <h3>Room No {room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"  ><img src={closeIcon} alt="close image" /></a>
            </div>
        </div>
    )
}

export default InfoBar
