import React, { useState, useEffect, useRef } from "react";
import styles from "./Eventcard.module.scss";

const delay = 3500;

export default function EventCard({ title, description, images }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, images]);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.slideshow}>
          <div
            className={styles.slideshowSlider}
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {images.map((slide, index) => (
              <div
                className={styles.slide}
                key={index}
                style={{ backgroundImage: `url(${slide})` }}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.container}>
          <span className={styles.title}>{title}</span>
          <div className={styles.overflow}>{description}</div>
        </div>
      </div>
    </>
  );
}