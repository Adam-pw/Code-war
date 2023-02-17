import Head from 'next/head'
import Image from 'next/image'
import ParticleBackground from '../components/particles/ParticleBackground'
import Maincomp from '../components/Main/Main'
import Aboutcomp from '../components/About/About'
import Eventcomp from '../components/Event/Event'
import Navbarcomp from '../components/Navbar/Navbar'
import data_imgs from "../metadata/gallery_meta.js";
import MediaQuery from 'react-responsive'
import styles from "../styles/Gallery.module.scss";


export default function Gallery() {
    return (
        <>
            <Head>
                <title>CodeWar Club MITS</title>
                <meta name="description" content="CodeWar Club, The one and only Coding Club in Madhav Institute of Technoloogy & Science, Gwalior. Our main aim is to code and spread code." />
                <meta name="keywords" content="Codewar Club MITS, Coding Club, MITS gwl, mitsgwl, codewar, codewar club, coding club." />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel="icon" href="/images/logo.webp" />
            </Head>
            <ParticleBackground />
            <Navbarcomp />
            <h1 className={styles.head}><b>GALLERY</b></h1>
            <div>
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap"
                    rel="stylesheet"
                />
                <div className={styles.gallery}>
                    <MediaQuery minWidth={601}>
                        <div className={styles.gallery__column}>
                            {data_imgs
                                .slice(data_imgs.length * 0.75, data_imgs.length)
                                .map((data) => {
                                    return (
                                        <a
                                            href={data.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.gallery__link}
                                            key={data.src}
                                        >
                                            <figure className={styles.gallery__thumb}>
                                                <img
                                                    src={data.src}
                                                    alt={data.alt}
                                                    className={styles.gallery__image}
                                                />
                                                <figcaption className={styles.gallery__caption}>
                                                    {data.caption}
                                                </figcaption>
                                            </figure>
                                        </a>
                                    );
                                })}
                        </div>
                        <div className={styles.gallery__column}>
                            {data_imgs
                                .slice(data_imgs.length * 0.5, data_imgs.length * 0.75)
                                .map((data) => {
                                    return (
                                        <a
                                            href={data.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            key={data.src}
                                            className={styles.gallery__link}
                                        >
                                            <figure className={styles.gallery__thumb}>
                                                <img
                                                    src={data.src}
                                                    alt={data.alt}
                                                    className={styles.gallery__image}
                                                />
                                                <figcaption className={styles.gallery__caption}>
                                                    {data.caption}
                                                </figcaption>
                                            </figure>
                                        </a>
                                    );
                                })}
                        </div>
                        <div className={styles.gallery__column}>
                            {data_imgs
                                .slice(data_imgs.length * 0.25, data_imgs.length * 0.5)
                                .map((data) => {
                                    return (
                                        <a
                                            href={data.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.gallery__link}
                                            key={data.src}
                                        >
                                            <figure className={styles.gallery__thumb}>
                                                <img
                                                    src={data.src}
                                                    alt={data.alt}
                                                    className={styles.gallery__image}
                                                />
                                                <figcaption className={styles.gallery__caption}>
                                                    {data.caption}
                                                </figcaption>
                                            </figure>
                                        </a>
                                    );
                                })}
                        </div>
                        <div className={styles.gallery__column}>
                            {data_imgs.slice(0, data_imgs.length * 0.25).map((data) => {
                                return (
                                    <a
                                        href={data.link}
                                        rel="noreferrer"
                                        target="_blank"
                                        className={styles.gallery__link}
                                        key={data.src}
                                    >
                                        <figure className={styles.gallery__thumb}>
                                            <img
                                                src={data.src}
                                                alt={data.alt}
                                                className={styles.gallery__image}
                                            />
                                            <figcaption className={styles.gallery__caption}>
                                                {data.caption}
                                            </figcaption>
                                        </figure>
                                    </a>
                                );
                            })}
                        </div>
                    </MediaQuery>

                    <MediaQuery maxWidth={600}>
                        <div className={styles.gallery__column}>
                            {data_imgs
                                .slice(data_imgs.length * 0.5, data_imgs.length)
                                .map((data) => {
                                    return (
                                        <a
                                            href={data.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.gallery__link}
                                            key={data.src}
                                        >
                                            <figure className={styles.gallery__thumb}>
                                                <img
                                                    src={data.src}
                                                    alt={data.alt}
                                                    className={styles.gallery__image}
                                                />
                                                <figcaption className={styles.gallery__caption}>
                                                    {data.caption}
                                                </figcaption>
                                            </figure>
                                        </a>
                                    );
                                })}
                        </div>
                        <div className={styles.gallery__column}>
                            {data_imgs
                                .slice(0, data_imgs.length * 0.5)
                                .map((data) => {
                                    return (
                                        <a
                                            href={data.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            key={data.src}
                                            className={styles.gallery__link}
                                        >
                                            <figure className={styles.gallery__thumb}>
                                                <img
                                                    src={data.src}
                                                    alt={data.alt}
                                                    className={styles.gallery__image}
                                                />
                                                <figcaption className={styles.gallery__caption}>
                                                    {data.caption}
                                                </figcaption>
                                            </figure>
                                        </a>
                                    );
                                })}
                        </div>
                    </MediaQuery>
                </div>
            </div>

            
        </>
    )
}