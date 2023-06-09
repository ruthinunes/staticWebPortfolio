import styles from "./main.module.css";

const Main = () => {
  return (
    <>
      <main className={styles.heroCtn}>
        <div className={styles.heroContent}>
          <p>Hey, I'm John Carter</p>
          <h1>I enjoy designing tech websites and digital products</h1>
          <button type="button" className={styles.heroButton}>
            Get in touch
          </button>
        </div>
        <img src="src/assets/images/heroImg.png" className={styles.heroImg} />
      </main>
    </>
  );
};

export default Main;
