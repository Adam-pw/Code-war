import React from "react";
import styles from "./Card.module.scss";
import { AiOutlineLinkedin } from 'react-icons/ai';
import Image from "next/image";

export default function Cardcomp(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.lines}></div>
          <div className={styles.imageBox}>
            <Image width={500} height={500} className={styles.imge} src={props.img} alt="avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <div className={styles.head}>
                {props.name} <br /> <span className={styles.spand}>{props.branch}</span>
              </div>
              <div className={styles.info}></div>
              <div className={styles.actions}>
                <div className={styles.cs}>
                  <a href={`https://www.instagram.com/${props.instagram}`} target="_blank" rel="noopener noreferrer">
                    <button className={styles.bu1}>Instagram</button>
                  </a>
                </div>
                <div>
                  <a href={`https://www.linkedin.com/in/${props.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <button className={styles.bu1}>LinkedIn</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
