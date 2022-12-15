import React from 'react'
import styles from "./Footer.module.scss"

import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';



export default function Aboutcomp() {
    return (
<>
<div>
<footer className={styles.foot}>
        <ul className={styles.icons}>
            <hr style={{width:'50%', marginLeft:'24vw'}}/>
            <li className={styles.list}><a className={styles.iconss} href="#"><ion-icon name="logo-whatsapp"/><BsInstagram/></a></li>
            <li className={styles.list}><a className={styles.iconss} href="#"><ion-icon name="logo-linkedin"/><AiOutlineLinkedin/></a></li>
            
            <li className={styles.list}><a className={styles.iconss} href="#"><ion-icon name="logo-instagram"/><BsWhatsapp/></a></li>
            <p className={styles.copyrights}>Copyright @ 2022 All Rights Reserved.</p>
        
        </ul>
      
    </footer>
    </div>;
</>

    )
}