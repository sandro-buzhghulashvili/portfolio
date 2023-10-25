import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

import classes from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.content}>
                <div className={classes.contact}>
                    <span className={classes.icon}><FontAwesomeIcon icon={faMessage} /></span>
                    <div>
                        <h1>Mail</h1>
                        <a href="#mail">sbuzhghulashvili@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer