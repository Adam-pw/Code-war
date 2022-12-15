import styles from './Preloader.module.scss';
import Image from 'next/image'
import preloadAnimation from "./preload.json";
import Lottie from "lottie-react";

const PreLoader = (props) => {
    return (
        <>
            <div
                className={`${styles.loader_wraper} ${props.isLoaded ? styles.loaded : null}`}>
                <div className={styles.sticker}>
                    <Lottie animationData={preloadAnimation} loop={true} width={400} height={400} />
                    {/* <Image src="/images/logo.png" alt="masscot" width="35" height="35" />
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div> */}
                </div>
            </div>
        </>
    );
};

export default PreLoader;
