import React from "react";
import styles from "./Card.module.scss";
import {
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsGoogle,
} from "react-icons/bs";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return `#04${color}`;
}

export default function TeamCard({meta}) {
  return (
    <div className={styles.contaiermain}> 
          <div className={styles.container}>
            <img src={meta.profile_pic} alt={meta.name} className={styles.image}/>
            <div className={styles.overlay} style={{backgroundColor: getRandomColor()}}>
              <div className={styles.text}>
                <div>
                  <a href="">
                  <BsInstagram className={styles.bsicons} />
                  </a>
                </div>
                <div>
                  <a href="">
                  <BsFacebook className={styles.bsicons} />  
                  </a>
                </div>
                <div>
                  <a href="">
                  <BsGithub className={styles.bsicons} />  
                  </a>
                </div>
                <div>
                  <a href="">
                  <BsGoogle className={styles.bsicons} />  
                  </a>
                </div>
              </div>
            </div>
          </div>
        <div className={styles.details}> 
          <b>{meta.name}</b>
          <span>
          {meta.department}
          </span>
        </div>
      </div>
  );
}