import React from 'react'
import styles from "./Footer.module.scss"

import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';



export default function Aboutcomp() {
    return (
        <>
            <footer className={styles.footmain}>
                <div className={styles.foot}>
                    <ul className={styles.icons}>
                        <hr />
                        <div className={styles.list}>
                            <a className={styles.iconss} href="#"><BsInstagram /></a>
                            <a className={styles.iconss} href="#"><AiOutlineLinkedin /></a>
                            <a className={styles.iconss} href="#"><BsWhatsapp /></a>
                        </div>
                        <p className={styles.copyrights}>Copyright @ 2022 All Rights Reserved.</p>
                    </ul>
                </div>
            </footer>
        </>

    )
}