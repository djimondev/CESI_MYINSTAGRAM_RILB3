import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInbox, faSearch, faStar, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'

import './Topbar.css'

class Topbar extends Component {
    render() {
        return (
            <div className="topbar">
                <div class="topbar--container">
                <div className="logo--container">
                    <img src="/assets/img/logo.png" srcset="/assets/img/logo-2x.png 2x" alt="" />
                </div>
                <div className="search--container">
                    <input type="text" placeholder={'Rechercher'}></input>
                </div>
                <div className="navigation--container">
                    {/*
                        yarn add @fortawesome/fontawesome-svg-core
                        yarn add @fortawesome/free-solid-svg-icons
                        yarn add @fortawesome/react-fontawesome
                      */}
                      <FontAwesomeIcon icon={ faHome} size="lg"/>
                      <FontAwesomeIcon icon={ faInbox} size="lg"/>
                      <FontAwesomeIcon icon={ faSearch} size="lg"/>
                      <FontAwesomeIcon icon={ faStar} size="lg"/>
                      <FontAwesomeIcon icon={ faPeopleArrows} size="lg"/>
                </div>
                </div>
            </div>
        )
    }
}

export default Topbar;