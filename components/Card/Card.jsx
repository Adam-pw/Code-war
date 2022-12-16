import React from "react";
import styles from "./Card.module.scss";

export default function Cardcomp(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.lines}></div>
          <div className={styles.imageBox}>
            <img className={styles.imge} src={props.img} alt="avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <div className={styles.head}>{props.name} <br /> <span className={styles.spand}>{props.branch}</span></div><br />
              <div className={styles.info}>
              </div>
              <div className={styles.actions}>
                <button className={styles.bu1}>{props.github}</button>
                <button className={styles.bu1}>{props.linkedin}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
