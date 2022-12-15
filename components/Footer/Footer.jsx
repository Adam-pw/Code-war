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
                            <a className={styles.iconss} href="https://www.instagram.com/code_war_mits/"><BsInstagram /></a>
                            <a className={styles.iconss} href="https://in.linkedin.com/company/codewar-club-mits"><AiOutlineLinkedin /></a>
                            <a className={styles.iconss} href="https://www.instagram.com/code_war_mits/"><BsWhatsapp /></a>
                        </div>
                        <p className={styles.copyrights}>Copyright @ 2022 All Rights Reserved.</p>
                    </ul>
                </div>
            </footer>
        </>

    )
}